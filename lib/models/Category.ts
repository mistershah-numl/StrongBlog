import mongoose, { Document, Schema } from 'mongoose'

export interface ICategory extends Document {
  name: string
  slug: string
  description: string
  color: string
  postCount: number
  createdAt: Date
  updatedAt: Date
}

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    color: {
      type: String,
      required: true,
      default: '#3B82F6',
    },
    postCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

// Index for better query performance
CategorySchema.index({ slug: 1 })
CategorySchema.index({ name: 1 })

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema)
