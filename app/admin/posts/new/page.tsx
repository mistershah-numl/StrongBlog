"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Save, Eye, Upload, X, Plus, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { AdminSidebar } from "@/components/admin-sidebar"

interface Category {
  _id: string
  name: string
  slug: string
  color: string
}

export default function NewPostPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featured, setFeatured] = useState(false)
  const [featuredImage, setFeaturedImage] = useState("")
  const [imageUploading, setImageUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      const data = await response.json()
      if (response.ok) {
        setCategories(data.categories || [])
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const validateForm = (): string | null => {
    if (!title.trim()) return "Title is required"
    if (!content.trim()) return "Content is required"
    if (!category) return "Category is required"
    if (title.length < 5) return "Title must be at least 5 characters long"
    if (content.length < 50) return "Content must be at least 50 characters long"
    return null
  }

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleSave = async (saveStatus: "draft" | "published") => {
    setError("")
    setSuccess("")
    setLoading(true)

    // Validate form
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      setLoading(false)
      return
    }

    try {
      const postData = {
        title: title.trim(),
        excerpt: excerpt.trim() || title.substring(0, 150) + "...",
        content: content.trim(),
        category,
        tags,
        featured,
        status: saveStatus,
        featuredImage: featuredImage || `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(title)}`,
        author: "Admin User",
      }

      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save post')
      }

      setSuccess(`Post ${saveStatus === "published" ? "published" : "saved as draft"} successfully!`)

      // Redirect after success
      setTimeout(() => {
        router.push("/admin/posts")
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save post. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Only images are allowed.')
      return
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      setError('File too large. Maximum size is 10MB.')
      return
    }

    setImageUploading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image')
      }

      setFeaturedImage(data.url)
      setSuccess('Image uploaded successfully!')

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image. Please try again.")
    } finally {
      setImageUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/posts" className="text-gray-600 hover:text-gray-900 lg:hidden">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">Create New Post</h1>
              <p className="text-gray-600 mt-1 text-sm md:text-base">Write and publish your blog post</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="outline"
              onClick={() => handleSave("draft")}
              disabled={loading}
              className="order-2 sm:order-1"
            >
              <Save className="h-4 w-4 mr-2" />
              {loading ? "Saving..." : "Save Draft"}
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700 order-1 sm:order-2"
              onClick={() => handleSave("published")}
              disabled={loading}
            >
              <Eye className="h-4 w-4 mr-2" />
              {loading ? "Publishing..." : "Publish"}
            </Button>
          </div>
        </div>

        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">{success}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900">Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your post title..."
                    className="mt-1"
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 mt-1">{title.length}/100 characters</p>
                </div>

                <div>
                  <Label htmlFor="excerpt" className="text-sm font-medium text-gray-700">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Write a brief excerpt that summarizes your post..."
                    rows={3}
                    className="mt-1"
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {excerpt.length}/200 characters. This will be shown in post previews and search results.
                  </p>
                </div>

                <div>
                  <Label htmlFor="content" className="text-sm font-medium text-gray-700">
                    Content *
                  </Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your post content here... (In a real app, this would be a rich text editor)"
                    rows={20}
                    className="mt-1 font-mono text-sm"
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {content.length} characters. Minimum 50 characters required.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900">Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                {!featuredImage ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload featured image</p>
                    <p className="text-sm text-gray-500 mb-4">PNG, JPG, GIF up to 10MB</p>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={loading || imageUploading}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="image-upload"
                      />
                      <Button variant="outline" disabled={loading || imageUploading} asChild>
                        <label htmlFor="image-upload" className="cursor-pointer">
                          {imageUploading ? "Uploading..." : "Choose File"}
                        </label>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <img
                      src={featuredImage}
                      alt="Featured"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={loading || imageUploading}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          id="image-replace"
                        />
                        <Button variant="outline" disabled={loading || imageUploading} className="w-full" asChild>
                          <label htmlFor="image-replace" className="cursor-pointer">
                            {imageUploading ? "Uploading..." : "Replace Image"}
                          </label>
                        </Button>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => setFeaturedImage("")} 
                        disabled={loading || imageUploading}
                        className="text-red-600 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Featured Post
                  </Label>
                  <Switch id="featured" checked={featured} onCheckedChange={setFeatured} disabled={loading} />
                </div>
                <p className="text-xs text-gray-500">Featured posts appear prominently on the homepage.</p>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">Category *</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={category} onValueChange={setCategory} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat._id} value={cat.name}>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                          {cat.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag..."
                    onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                    disabled={loading}
                  />
                  <Button onClick={handleAddTag} size="sm" disabled={loading}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:text-red-600"
                        disabled={loading}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO Preview */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">SEO Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-blue-600 text-sm md:text-base font-medium line-clamp-1">
                    {title || "Your post title will appear here"}
                  </div>
                  <div className="text-green-700 text-xs md:text-sm">
                    strongblog.com/blog/{title ? generateSlug(title) : "your-post-slug"}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base line-clamp-2">
                    {excerpt || "Your post excerpt will appear here as the meta description..."}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
