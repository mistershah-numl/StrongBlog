import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Category from '@/lib/models/Category'
import Post from '@/lib/models/Post'
import mongoose from 'mongoose'

interface RouteParams {
  params: {
    id: string
  }
}

// GET /api/categories/[id] - Get single category
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()

    const { id } = params

    let category
    if (mongoose.Types.ObjectId.isValid(id)) {
      category = await Category.findById(id)
    } else {
      category = await Category.findOne({ slug: id })
    }

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ category })
  } catch (error) {
    console.error('Error fetching category:', error)
    return NextResponse.json(
      { error: 'Failed to fetch category' },
      { status: 500 }
    )
  }
}

// PUT /api/categories/[id] - Update category
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()

    const { id } = params
    const body = await request.json()

    const category = await Category.findById(id)
    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      )
    }

    // If name is changing, regenerate slug
    if (body.name && body.name !== category.name) {
      let slug = body.name
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      
      // Ensure slug is unique
      let slugExists = await Category.findOne({ slug, _id: { $ne: id } })
      let counter = 1
      while (slugExists) {
        slug = `${body.name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()}-${counter}`
        slugExists = await Category.findOne({ slug, _id: { $ne: id } })
        counter++
      }
      body.slug = slug
    }

    const updatedCategory = await Category.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })

    return NextResponse.json({
      message: 'Category updated successfully!',
      category: updatedCategory,
    })
  } catch (error) {
    console.error('Error updating category:', error)
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    )
  }
}

// DELETE /api/categories/[id] - Delete category
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()

    const { id } = params

    const category = await Category.findById(id)
    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      )
    }

    // Check if category has posts
    const postCount = await Post.countDocuments({ category: category.name })
    if (postCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete category. It has ${postCount} posts. Please reassign or delete the posts first.` },
        { status: 400 }
      )
    }

    await Category.findByIdAndDelete(id)

    return NextResponse.json({
      message: 'Category deleted successfully!',
    })
  } catch (error) {
    console.error('Error deleting category:', error)
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    )
  }
}
