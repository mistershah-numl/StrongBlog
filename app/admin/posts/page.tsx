import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, Edit3, Trash2, MoreHorizontal, Eye, Calendar } from "lucide-react"
import Link from "next/link"
import { AdminSidebar } from "@/components/admin-sidebar"

// Mock data for posts management
const allPosts = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    status: "published",
    category: "Technology",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    views: 1234,
    comments: 12,
  },
  {
    id: "2",
    title: "Building Scalable Applications with Next.js and MongoDB",
    status: "published",
    category: "Development",
    author: "Michael Chen",
    publishedAt: "2024-01-12",
    views: 987,
    comments: 8,
  },
  {
    id: "3",
    title: "Design Systems: Creating Consistency Across Digital Products",
    status: "draft",
    category: "Design",
    author: "Emily Rodriguez",
    publishedAt: null,
    views: 0,
    comments: 0,
  },
  {
    id: "4",
    title: "The Art of Technical Writing: Communicating Complex Ideas Simply",
    status: "published",
    category: "Writing",
    author: "David Kim",
    publishedAt: "2024-01-08",
    views: 756,
    comments: 15,
  },
  {
    id: "5",
    title: "Cloud Architecture Patterns for Modern Applications",
    status: "published",
    category: "Cloud",
    author: "Lisa Wang",
    publishedAt: "2024-01-05",
    views: 543,
    comments: 6,
  },
]

export default function AdminPostsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-gray-900">All Posts</h1>
            <p className="text-gray-600 mt-1">Manage and organize your blog posts</p>
          </div>
          <Link href="/admin/posts/new">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search posts..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="cloud">Cloud</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Posts Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl font-bold text-gray-900">Posts ({allPosts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Comments</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="font-medium text-gray-900 line-clamp-1 max-w-xs">{post.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={post.status === "published" ? "default" : "secondary"}
                        className={
                          post.status === "published"
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                        }
                      >
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{post.category}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{post.author}</TableCell>
                    <TableCell>
                      {post.publishedAt ? (
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      ) : (
                        <span className="text-gray-400">Not published</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">{post.comments}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/blog/${post.id}`} className="flex items-center">
                              <Eye className="h-4 w-4 mr-2" />
                              View Post
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/posts/${post.id}/edit`} className="flex items-center">
                              <Edit3 className="h-4 w-4 mr-2" />
                              Edit Post
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 focus:text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Post
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
