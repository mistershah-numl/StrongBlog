"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Eye, Upload, X, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { AdminSidebar } from "@/components/admin-sidebar"
import { notFound } from "next/navigation"

// Mock data for existing post
const mockPost = {
  id: "1",
  title: "The Future of Web Development: Trends to Watch in 2024",
  excerpt:
    "Explore the latest trends shaping the web development landscape, from AI integration to new frameworks and tools that are revolutionizing how we build applications.",
  content: `The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are emerging that will shape how we build and interact with web applications.

## AI Integration in Development Workflows

Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. From AI-powered code completion to automated testing and deployment, developers are leveraging AI to increase productivity and reduce errors.

## The Rise of Edge Computing

Edge computing is transforming how we think about application architecture. By processing data closer to the user, we can achieve lower latency and better performance, especially for real-time applications.

## WebAssembly Goes Mainstream

WebAssembly (WASM) is finally reaching mainstream adoption, allowing developers to run high-performance applications in the browser using languages like Rust, C++, and Go.`,
  category: "Technology",
  tags: ["Web Development", "AI", "Trends"],
  featured: true,
  status: "published",
  featuredImage: "/modern-web-dev-workspace.png",
  author: "Sarah Johnson",
  publishedAt: "2024-01-15",
}

interface EditPostPageProps {
  params: {
    id: string
  }
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featured, setFeatured] = useState(false)
  const [status, setStatus] = useState("draft")
  const [featuredImage, setFeaturedImage] = useState("")
  const [loading, setLoading] = useState(true)

  // Simulate loading post data
  useEffect(() => {
    // In a real app, this would fetch from MongoDB
    if (params.id === "1") {
      setTitle(mockPost.title)
      setExcerpt(mockPost.excerpt)
      setContent(mockPost.content)
      setCategory(mockPost.category)
      setTags(mockPost.tags)
      setFeatured(mockPost.featured)
      setStatus(mockPost.status)
      setFeaturedImage(mockPost.featuredImage)
      setLoading(false)
    } else {
      notFound()
    }
  }, [params.id])

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSave = (saveStatus: "draft" | "published") => {
    // This would normally update in MongoDB
    console.log("Updating post:", {
      id: params.id,
      title,
      excerpt,
      content,
      category,
      tags,
      featured,
      status: saveStatus,
      featuredImage,
    })
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      // This would normally delete from MongoDB
      console.log("Deleting post:", params.id)
      // Redirect to posts list
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/posts" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="font-serif text-3xl font-bold text-gray-900">Edit Post</h1>
              <p className="text-gray-600 mt-1">Update your blog post</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
            <Button variant="outline" onClick={() => handleSave("draft")}>
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => handleSave("published")}>
              <Eye className="h-4 w-4 mr-2" />
              {status === "published" ? "Update" : "Publish"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
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
                  />
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
                  />
                </div>

                <div>
                  <Label htmlFor="content" className="text-sm font-medium text-gray-700">
                    Content *
                  </Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your post content here..."
                    rows={20}
                    className="mt-1 font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-bold text-gray-900">Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                {featuredImage ? (
                  <div className="space-y-4">
                    <img
                      src={featuredImage || "/placeholder.svg"}
                      alt="Featured"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button variant="outline" onClick={() => setFeaturedImage("")}>
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload featured image</p>
                    <p className="text-sm text-gray-500 mb-4">PNG, JPG, GIF up to 10MB</p>
                    <Button variant="outline">Choose File</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Post Status */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">Post Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge
                  variant={status === "published" ? "default" : "secondary"}
                  className={
                    status === "published"
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  }
                >
                  {status === "published" ? "Published" : "Draft"}
                </Badge>
                {status === "published" && (
                  <p className="text-xs text-gray-500 mt-2">Published on {mockPost.publishedAt}</p>
                )}
              </CardContent>
            </Card>

            {/* Publish Settings */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Featured Post
                  </Label>
                  <Switch id="featured" checked={featured} onCheckedChange={setFeatured} />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg font-bold text-gray-900">Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Writing">Writing</SelectItem>
                    <SelectItem value="Cloud">Cloud</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
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
                  />
                  <Button onClick={handleAddTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-red-600">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
