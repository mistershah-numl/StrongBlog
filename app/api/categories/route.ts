import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Category from '@/lib/models/Category'
import Post from '@/lib/models/Post'

// Generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// GET /api/categories - Get all categories
export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const includePostCount = searchParams.get('includePostCount') === 'true'
    const limit = parseInt(searchParams.get('limit') || '50')
    const page = parseInt(searchParams.get('page') || '1')

    const skip = (page - 1) * limit

    let categories
    if (includePostCount) {
      // Use aggregation to include post count
      const pipeline: any[] = [
        {
          $lookup: {
            from: 'posts',
            localField: '_id',
            foreignField: 'category',
            as: 'posts'
          }
        },
        {
          $addFields: {
            postCount: { $size: '$posts' }
          }
        },
        {
          $project: {
            posts: 0
          }
        }
      ]

      // Add search filter if provided
      if (search) {
        pipeline.unshift({
          $match: {
            $or: [
              { name: { $regex: search, $options: 'i' } },
              { description: { $regex: search, $options: 'i' } },
            ]
          }
        })
      }

      // Add sorting, skip, and limit
      pipeline.push(
        { $sort: { name: 1 } },
        { $skip: skip },
        { $limit: limit }
      )

      categories = await Category.aggregate(pipeline)
    } else {
      // Build query
      const query: any = {}
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ]
      }

      categories = await Category.find(query)
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit)
        .lean()
    }

    const total = await Category.countDocuments(
      search ? {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ]
      } : {}
    )

    return NextResponse.json({
      categories,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: total,
      },
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}

// POST /api/categories - Create new category
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, description, color } = body

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      )
    }

    // Generate slug
    let slug = generateSlug(name)
    
    // Ensure slug is unique
    let slugExists = await Category.findOne({ slug })
    let counter = 1
    while (slugExists) {
      slug = `${generateSlug(name)}-${counter}`
      slugExists = await Category.findOne({ slug })
      counter++
    }

    // Create category
    const categoryData = {
      name: name.trim(),
      slug,
      description: description?.trim() || '',
      color: color || '#3B82F6',
      postCount: 0,
    }

    const category = await Category.create(categoryData)

    return NextResponse.json({
      message: 'Category created successfully!',
      category,
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    )
  }
}
