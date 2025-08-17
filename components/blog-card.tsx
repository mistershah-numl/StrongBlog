import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  image: string
}

interface BlogCardProps {
  post: BlogPost
  variant?: "featured" | "regular" | "compact"
}

export function BlogCard({ post, variant = "regular" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-lg">
        <div className="relative h-64">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-purple-600 hover:bg-purple-700">Featured</Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <Link href={`/blog/${post.id}`}>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm">
        <div className="flex">
          <div className="w-24 h-24 relative flex-shrink-0">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-l-lg" />
          </div>
          <CardContent className="p-4 flex-1">
            <Badge variant="secondary" className="text-xs mb-2">
              {post.category}
            </Badge>
            <h4 className="font-serif font-bold text-gray-900 mb-1 line-clamp-2 text-sm">
              <Link href={`/blog/${post.id}`} className="hover:text-purple-600 transition-colors">
                {post.title}
              </Link>
            </h4>
            <p className="text-xs text-gray-500">{post.readTime}</p>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-sm">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <CardContent className="md:w-2/3 p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            <Link href={`/blog/${post.id}`} className="hover:text-purple-600 transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <Link href={`/blog/${post.id}`}>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
