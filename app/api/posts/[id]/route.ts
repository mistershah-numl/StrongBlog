import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Post from '@/lib/models/Post'
import mongoose from 'mongoose'

interface RouteParams {
    params: {
        id: string
    }
}

// GET /api/posts/[id] - Get single post
export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        await connectDB()

        const { id } = params

        let post
        if (mongoose.Types.ObjectId.isValid(id)) {
            // Search by MongoDB ObjectId
            post = await Post.findById(id)
        } else {
            // Search by slug
            post = await Post.findOne({ slug: id })
        }

        if (!post) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        // Increment views
        await Post.findByIdAndUpdate(post._id, { $inc: { views: 1 } })

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
export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        await connectDB()

        const { id } = params
        const body = await request.json()

        const post = await Post.findById(id)
        if (!post) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        // If status changed to published and wasn't published before
        if (body.status === 'published' && post.status !== 'published') {
            body.publishedAt = new Date()
        }

        const updatedPost = await Post.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })

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
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        await connectDB()

        const { id } = params

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
