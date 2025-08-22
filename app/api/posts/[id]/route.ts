
// filepath: app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Post from '@/lib/models/Post'
import Category from '@/lib/models/Category'
import mongoose from 'mongoose'

interface RouteContext {
    params: Promise<{ id: string }>
}

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Remove consecutive hyphens
        .slice(0, 200) // Limit length
}

// GET /api/posts/[id] - Get single post
export async function GET(request: NextRequest, context: RouteContext) {
    try {
        await connectDB()
        const { id } = await context.params

        let post
        if (mongoose.Types.ObjectId.isValid(id)) {
            // Search by MongoDB ObjectId
            post = await Post.findById(id).populate('category', '_id name color slug')
        } else {
            // Search by slug
            post = await Post.findOne({ slug: id }).populate('category', '_id name color slug')
        }

        if (!post) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        // Ensure category is null if not populated
        if (!post.category) {
            post.category = null
        }

        return NextResponse.json({ post })
    } catch (error) {
        console.error('Error fetching post:', error)
        return NextResponse.json(
            { error: 'Failed to fetch post' },
            { status: 500 }
        )
    }
}

// PUT /api/posts/[id] - Update post
export async function PUT(request: NextRequest, context: RouteContext) {
    try {
        await connectDB()
        const { id } = await context.params
        const body = await request.json()
        console.log('Received PUT request body:', body)

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: 'Invalid post ID' },
                { status: 400 }
            )
        }

        const post = await Post.findById(id)
        if (!post) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        // Validate and prepare update data
        const updateData: any = {
            title: body.title?.trim(),
            excerpt: body.excerpt?.trim() || '',
            content: body.content?.trim(),
            tags: Array.isArray(body.tags) ? body.tags : [],
            featured: !!body.featured,
            status: body.status === 'published' ? 'published' : 'draft',
            featuredImage: body.featuredImage?.trim() || '',
        }

        // Handle category
        if (body.category !== undefined && body.category !== null) {
            if (typeof body.category !== 'string' || !mongoose.Types.ObjectId.isValid(body.category)) {
                return NextResponse.json(
                    { error: `Invalid category ID: ${body.category}` },
                    { status: 400 }
                )
            }
            const category = await Category.findById(body.category)
            if (!category) {
                return NextResponse.json(
                    { error: `Category not found for ID: ${body.category}` },
                    { status: 400 }
                )
            }
            updateData.category = body.category
        } else {
            updateData.category = null
        }

        // Generate new slug if title has changed
        if (body.title && body.title.trim() !== post.title) {
            let newSlug = generateSlug(body.title)
            let slugExists = await Post.findOne({ slug: newSlug, _id: { $ne: id } })
            let counter = 1
            while (slugExists) {
                newSlug = `${generateSlug(body.title)}-${counter}`
                slugExists = await Post.findOne({ slug: newSlug, _id: { $ne: id } })
                counter++
            }
            updateData.slug = newSlug
        }

        // Update publishedAt if status changed to published
        if (body.status === 'published' && post.status !== 'published') {
            updateData.publishedAt = new Date()
        }

        // Validate required fields
        if (!updateData.title || !updateData.content) {
            return NextResponse.json(
                { error: 'Title and content are required' },
                { status: 400 }
            )
        }

        const updatedPost = await Post.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        }).populate('category', '_id name color slug')

        if (!updatedPost) {
            return NextResponse.json(
                { error: 'Failed to update post' },
                { status: 500 }
            )
        }

        console.log('Updated post:', updatedPost)
        return NextResponse.json({
            message: 'Post updated successfully!',
            post: updatedPost,
        })
    } catch (error) {
        console.error('Error updating post:', error)
        return NextResponse.json(
            { error: 'Failed to update post' },
            { status: 500 }
        )
    }
}

// DELETE /api/posts/[id] - Delete post
export async function DELETE(request: NextRequest, context: RouteContext) {
    try {
        await connectDB()
        const { id } = await context.params

        const post = await Post.findById(id)
        if (!post) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        await Post.findByIdAndDelete(id)

        return NextResponse.json({
            message: 'Post deleted successfully!',
        })
    } catch (error) {
        console.error('Error deleting post:', error)
        return NextResponse.json(
            { error: 'Failed to delete post' },
            { status: 500 }
        )
    }
}
