
// filepath: app/blog/[slug]/page.tsx
"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { StrongNavigation } from "@/components/strong-navigation"
import { Button } from "@/components/ui/button"
import { Share2, Facebook, Linkedin, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: {
    _id: string
    name: string
    color: string
    slug: string
  } | null
  tags: string[]
  featured: boolean
  status: "draft" | "published"
  featuredImage: string
  publishedAt: string
  createdAt: string
  views: number
  comments: number
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : (Array.isArray(params.slug) ? params.slug[0] : "")
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFoundError, setNotFoundError] = useState(false)

  useEffect(() => {
    fetchPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/slug/${slug}`)
      const data = await response.json()
      if (response.ok && data.post) {
        setPost(data.post)
        incrementViews(data.post._id)
      } else {
        setNotFoundError(true)
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      setNotFoundError(true)
    } finally {
      setLoading(false)
    }
  }

  const incrementViews = async (postId: string) => {
    try {
      await fetch(`/api/posts/${postId}/views`, { method: 'POST' })
    } catch (error) {
      console.error('Error incrementing views:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <StrongNavigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (notFoundError || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <StrongNavigation />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-purple-600 via-teal-500 to-green-500 py-20 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <div className="text-xs text-white/80 mb-4 tracking-wide">
            {post.category?.name?.toUpperCase() || 'Uncategorized'} — {formatDate(post.publishedAt)}
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 text-white/80 text-sm">
            By <span className="font-medium">{post.author}</span> • {post.views} views
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Excerpt */}
        {post.excerpt && (
          <div className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
            {post.excerpt}
          </div>
        )}

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&>p]:mb-6 [&>p]:text-base [&>p]:leading-relaxed [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mt-4 [&>h3]:mb-2 [&>ul]:my-4 [&>ol]:my-4 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">SHARE:</span>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => navigator.share ? navigator.share({ title: post.title, url: window.location.href }) : navigator.clipboard.writeText(window.location.href)}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#4C6FE7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-light mb-4">Strong</div>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm tracking-wide">SOLUTIONS</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>PLATFORMS</li>
                <li>EXPERTISE</li>
                <li>BLOG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm tracking-wide">ABOUT US</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>CAREERS</li>
                <li>CONTACT US</li>
                <li>PARTNERSHIPS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm tracking-wide">A ONESIX ANALYTICS | A ONESIX COMPANY</h4>
              <div className="text-sm text-white/80">CHICAGO, IL, USA</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
