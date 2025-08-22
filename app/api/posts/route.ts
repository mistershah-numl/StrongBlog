
// filepath: app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Post from '@/lib/models/Post'
import Category from '@/lib/models/Category'
import mongoose from 'mongoose'

// Generate slug from title
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

// GET /api/posts - Get all posts
export async function GET(request: NextRequest) {
    try {
        await connectDB()

        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status')
        const category = searchParams.get('category')
        const featured = searchParams.get('featured')
        const limit = parseInt(searchParams.get('limit') || '10')
        const page = parseInt(searchParams.get('page') || '1')

        // Build query
        const query: any = {}
        if (status) query.status = status
        if (category) {
            // Allow filtering by category ID or name
            const categoryDoc = await Category.findOne({ $or: [{ _id: category }, { name: category }] })
            if (categoryDoc) {
                query.category = categoryDoc._id
            } else {
                query.category = null
            }
        }
        if (featured) query.featured = featured === 'true'

        const skip = (page - 1) * limit

        const posts = await Post.find(query)
            .populate({
                path: 'category',
                select: '_id name color slug',
                options: { lean: true }
            })
            .sort({ publishedAt: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean()

        // Ensure category is null if not populated
        const sanitizedPosts = posts.map(post => ({
            ...post,
            category: post.category ? {
                _id: post.category._id,
                name: post.category.name,
                color: post.category.color || '#6b7280',
                slug: post.category.slug
            } : null
        }))

        const total = await Post.countDocuments(query)

        return NextResponse.json({
            posts: sanitizedPosts,
            pagination: {
                current: page,
                total: Math.ceil(total / limit),
                count: total,
            },
        })
    } catch (error) {
        console.error('Error fetching posts:', error)
        return NextResponse.json(
            { error: 'Failed to fetch posts' },
            { status: 500 }
        )
    }
}

// POST /api/posts - Create new post
export async function POST(request: NextRequest) {
    try {
        await connectDB()

        const body = await request.json()
        console.log('Received POST request body:', body)
        const {
            title,
            excerpt,
            content,
            category,
            tags,
            featured,
            status,
            featuredImage,
            author,
        } = body

        // Validation
        if (!title || !content || !author) {
            return NextResponse.json(
                { error: 'Missing required fields: title, content, and author are required' },
                { status: 400 }
            )
        }

        // Handle category
        let categoryId = null
        if (category && typeof category === 'string' && category !== 'none') {
            if (!mongoose.Types.ObjectId.isValid(category)) {
                return NextResponse.json(
                    { error: `Invalid category ID: ${category}` },
                    { status: 400 }
                )
            }
            const catDoc = await Category.findById(category)
            if (!catDoc) {
                return NextResponse.json(
                    { error: `Category not found for ID: ${category}` },
                    { status: 400 }
                )
            }
            categoryId = catDoc._id
        }

        // Generate slug
        let slug = generateSlug(title)
        let slugExists = await Post.findOne({ slug })
        let counter = 1
        while (slugExists) {
            slug = `${generateSlug(title)}-${counter}`
            slugExists = await Post.findOne({ slug })
            counter++
        }

        // Create post
        const postData = {
            title: title.trim(),
            excerpt: excerpt?.trim() || title.substring(0, 150) + '...',
            content: content.trim(),
            category: categoryId,
            tags: tags || [],
            featured: !!featured,
            status: status || 'draft',
            featuredImage: featuredImage?.trim() || '',
            author: author.trim(),
            slug,
            publishedAt: status === 'published' ? new Date() : null,
        }

        const post = await Post.create(postData)

        // Populate category for response
        const populatedPost = await Post.findById(post._id)
            .populate('category', '_id name color slug')
            .lean()

        return NextResponse.json({
            message: `Post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`,
            post: {
                ...populatedPost,
                category: populatedPost.category ? {
                    _id: populatedPost.category._id,
                    name: populatedPost.category.name,
                    color: populatedPost.category.color || '#6b7280',
                    slug: populatedPost.category.slug
                } : null
            },
        }, { status: 201 })

    } catch (error) {
        console.error('Error creating post:', error)
        return NextResponse.json(
            { error: 'Failed to create post' },
            { status: 500 }
        )
    }
}
