"use client"

import { useState, useEffect } from "react"
import { StrongNavigation } from "@/components/strong-navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
  }
  tags: string[]
  featured: boolean
  status: "draft" | "published"
  featuredImage: string
  publishedAt: string
  createdAt: string
  views: number
  comments: number
}

interface Category {
  _id: string
  name: string
  slug: string
  color: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
    fetchCategories()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts?status=published')
      const data = await response.json()
      if (response.ok) {
        const allPosts = data.posts || []
        setPosts(allPosts)
        
        // Set featured post (first featured post or first post)
        const featured = allPosts.find((post: Post) => post.featured) || allPosts[0]
        setFeaturedPost(featured)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

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

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category._id === selectedCategory
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch && post._id !== featuredPost?._id
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <StrongNavigation />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
          {/* Additional flowing lines pattern */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path d="M50,200 Q200,50 350,200 T650,200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
              <path d="M50,220 Q200,70 350,220 T650,220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
              <path d="M50,240 Q200,90 350,240 T650,240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredPost ? (
            <>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                {featuredPost.title}
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Link href={`/blog/${featuredPost.slug}`}>
                <Button className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-none">
                  READ MORE
                </Button>
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Strong Analytics
                <br />
                Blog
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
                Insights and updates from our team of data science and machine learning experts.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
            <div className="relative">
              <select 
                className="appearance-none bg-white border-0 border-b border-gray-300 px-0 py-3 pr-8 text-sm text-gray-600 focus:outline-none focus:border-gray-500 bg-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">ALL CATEGORIES</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name.toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH ALL POSTS"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border-0 border-b border-gray-300 px-0 py-3 pr-8 text-sm text-gray-600 focus:outline-none focus:border-gray-500 w-64 bg-transparent placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-sm mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No posts found.</p>
              {searchTerm && (
                <p className="text-gray-500 mt-2">Try adjusting your search terms or category filter.</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
              {filteredPosts.map((post) => (
                <div key={post._id} className="group cursor-pointer">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-sm overflow-hidden">
                      <Image
                        src={post.featuredImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs text-gray-500 font-medium tracking-wide">
                        {formatDate(post.publishedAt)}
                      </div>

                      <h3 className="text-gray-900 text-lg font-normal leading-tight group-hover:text-blue-600 transition-colors line-clamp-3">
                        {post.title}
                      </h3>

                      <div className="text-xs text-gray-500 font-medium tracking-wide">
                        BY <span className="text-gray-700">{post.author.toUpperCase()}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-1">
                        <span 
                          className="text-xs font-medium tracking-wide px-2 py-1 rounded-sm text-white"
                          style={{ backgroundColor: post.category.color }}
                        >
                          {post.category.name.toUpperCase()}
                        </span>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 font-medium tracking-wide">
                            {tag.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button key={num} className="w-8 h-8 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {num}
              </button>
            ))}
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium tracking-wide ml-2">
              NEXT
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Work with
            <br />
            Strong.
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Find out how Strong can help you tackle your most challenging data science and machine learning projects.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-none">
            GET IN TOUCH
          </Button>
        </div>
      </section>

      <footer className="text-white py-16" style={{ backgroundColor: '#4C6FE7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-light mb-8">Strong</div>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-wider">SOLUTIONS</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition-colors">PLATFORMS</li>
                <li className="hover:text-white cursor-pointer transition-colors">EXPERTISE</li>
                <li className="hover:text-white cursor-pointer transition-colors">BLOG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-wider">ABOUT US</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition-colors">CAREERS</li>
                <li className="hover:text-white cursor-pointer transition-colors">CONTACT US</li>
                <li className="hover:text-white cursor-pointer transition-colors">PARTNERSHIPS</li>
              </ul>
            </div>
            <div>
              <div className="text-sm text-white/80 leading-relaxed">
                © 2023 STRONG ANALYTICS | A ONESIX COMPANY
                <br />
                CHICAGO, IL, USA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
