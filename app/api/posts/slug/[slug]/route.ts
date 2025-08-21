import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Post from '@/lib/models/Post'

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    await connectDB()
    const { slug } = await context.params

    const post = await Post.findOne({ 
      slug,
      status: 'published'
    }).populate('category', 'name color slug')

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      post
    })
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}