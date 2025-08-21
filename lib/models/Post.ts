// filepath: lib/models/Post.ts
import mongoose, { Document, Schema } from 'mongoose'

export interface IPost extends Document {
    title: string
    excerpt: string
    content: string
    category: any
    tags: string[]
    featured: boolean
    status: 'draft' | 'published'
    featuredImage: string
    author: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    views: number
    comments: number
    slug: string
}

const PostSchema = new Schema<IPost>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
        },
        excerpt: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: Schema.Types.Mixed,
            required: true,
        },
        tags: [{
            type: String,
            trim: true,
        }],
        featured: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'draft',
        },
        featuredImage: {
            type: String,
            default: '',
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        publishedAt: {
            type: Date,
            default: null,
        },
        views: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Number,
            default: 0,
        },
        slug: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

// Index for better query performance
PostSchema.index({ status: 1, publishedAt: -1 })
// Only keep one slug index definition
// PostSchema.index({ slug: 1 })
PostSchema.index({ tags: 1 })

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema)