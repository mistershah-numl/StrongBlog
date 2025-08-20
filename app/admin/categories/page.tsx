"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Edit3, Trash2, MoreHorizontal, Tags, CheckCircle, AlertCircle, Search } from "lucide-react"
import { AdminSidebar } from "@/components/admin-sidebar"

interface Category {
  _id: string
  name: string
  slug: string
  description: string
  color: string
  postCount: number
  createdAt: string
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "#3B82F6",
  })
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

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    if (!formData.name.trim()) {
      setError("Category name is required")
      setLoading(false)
      return
    }

    try {
      const url = editingCategory ? `/api/categories/${editingCategory._id}` : '/api/categories'
      const method = editingCategory ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save category')
      }

      setSuccess(data.message)
      fetchCategories() // Refresh the list
      setFormData({ name: "", description: "", color: "#3B82F6" })
      setEditingCategory(null)
      setIsDialogOpen(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save category. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      color: category.color,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (categoryId: string) => {
    const category = categories.find((cat) => cat._id === categoryId)
    if (!category) return

    if (!confirm(`Are you sure you want to delete the "${category.name}" category? This action cannot be undone.`)) {
      return
    }

    try {
      const response = await fetch(`/api/categories/${categoryId}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete category')
      }

      setSuccess(data.message)
      fetchCategories() // Refresh the list
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete category")
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setEditingCategory(null)
    setFormData({ name: "", description: "", color: "#3B82F6" })
    setError("")
  }

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">Categories</h1>
            <p className="text-gray-600 mt-1 text-sm md:text-base">Organize your blog posts with categories</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setEditingCategory(null)}>
                <Plus className="h-4 w-4 mr-2" />
                New Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-serif text-xl font-bold">
                  {editingCategory ? "Edit Category" : "Create New Category"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">{error}</AlertDescription>
                  </Alert>
                )}

                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter category name..."
                    className="mt-1"
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter category description..."
                    rows={3}
                    className="mt-1"
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="color" className="text-sm font-medium text-gray-700">
                    Color
                  </Label>
                  <div className="flex items-center gap-3 mt-1">
                    <input
                      type="color"
                      id="color"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="w-12 h-10 rounded border border-gray-300"
                      disabled={loading}
                    />
                    <Input
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      placeholder="#3B82F6"
                      className="flex-1"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={handleDialogClose} disabled={loading}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700" disabled={loading}>
                    {loading ? "Saving..." : editingCategory ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">{success}</AlertDescription>
          </Alert>
        )}

        {error && !isDialogOpen && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        )}

        {/* Search */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
              <Tags className="h-5 w-5" />
              Categories ({filteredCategories.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredCategories.length === 0 ? (
              <div className="text-center py-8">
                <Tags className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">No categories found</p>
                <p className="text-sm text-gray-500">
                  {searchTerm ? "Try adjusting your search terms" : "Create your first category to get started"}
                </p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Posts</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((category) => (
                    <TableRow key={category._id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }} />
                          <div>
                            <div className="font-medium text-gray-900">{category.name}</div>
                            <div className="text-sm text-gray-500">/{category.slug}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {category.description || "No description"}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {category.postCount} posts
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {new Date(category.createdAt).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEdit(category)}>
                              <Edit3 className="h-4 w-4 mr-2" />
                              Edit Category
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(category._id)}
                              className="text-red-600 focus:text-red-600"
                              disabled={category.postCount > 0}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete Category
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
