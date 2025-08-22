
// filepath: app/api/posts/slug/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Post from '@/lib/models/Post'

interface RouteContext {
  params: Promise<{ slug: string }>
}

// GET /api/posts/slug/[slug] - Get single post by slug
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    await connectDB()
    const { slug } = await context.params

    const post = await Post.findOne({ slug }).populate('category', '_id name color slug')

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
    console.error('Error fetching post by slug:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}
