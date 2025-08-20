import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Post from '@/lib/models/Post'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const post = await Post.findOne({ 
      slug: params.slug,
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
