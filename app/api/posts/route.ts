import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Post from '@/lib/models/Post'

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
        if (category) query.category = category
        if (featured) query.featured = featured === 'true'

        const skip = (page - 1) * limit

        const posts = await Post.find(query)
            .populate('category', 'name color slug')
            .sort({ publishedAt: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean()

        const total = await Post.countDocuments(query)

        return NextResponse.json({
            posts,
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
        if (!title || !content || !category || !author) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Generate slug
        let slug = generateSlug(title)

        // Ensure slug is unique
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
            category,
            tags: tags || [],
            featured: featured || false,
            status: status || 'draft',
            featuredImage: featuredImage || '',
            author,
            slug,
            publishedAt: status === 'published' ? new Date() : null,
        }

        const post = await Post.create(postData)

        return NextResponse.json({
            message: `Post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`,
            post,
        }, { status: 201 })

    } catch (error) {
        console.error('Error creating post:', error)
        return NextResponse.json(
            { error: 'Failed to create post' },
            { status: 500 }
        )
    }
}
