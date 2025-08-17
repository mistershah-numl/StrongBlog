"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Edit3,
  Trash2,
  MoreHorizontal,
  Users,
  CheckCircle,
  AlertCircle,
  Search,
  UserPlus,
  Shield,
  Mail,
  Calendar,
} from "lucide-react"
import { AdminSidebar } from "@/components/admin-sidebar"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "editor" | "author" | "subscriber"
  status: "active" | "inactive" | "banned"
  avatar: string
  postCount: number
  lastLogin: string
  createdAt: string
}

const defaultUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@strongblog.com",
    role: "admin",
    status: "active",
    avatar: "",
    postCount: 0,
    lastLogin: "2024-01-15T10:30:00Z",
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@strongblog.com",
    role: "editor",
    status: "active",
    avatar: "",
    postCount: 8,
    lastLogin: "2024-01-14T15:45:00Z",
    createdAt: "2024-01-02T00:00:00Z",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@strongblog.com",
    role: "author",
    status: "active",
    avatar: "",
    postCount: 12,
    lastLogin: "2024-01-13T09:20:00Z",
    createdAt: "2024-01-03T00:00:00Z",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily@strongblog.com",
    role: "author",
    status: "active",
    avatar: "",
    postCount: 5,
    lastLogin: "2024-01-12T14:10:00Z",
    createdAt: "2024-01-04T00:00:00Z",
  },
  {
    id: "5",
    name: "David Kim",
    email: "david@strongblog.com",
    role: "author",
    status: "inactive",
    avatar: "",
    postCount: 3,
    lastLogin: "2024-01-05T11:30:00Z",
    createdAt: "2024-01-05T00:00:00Z",
  },
]

const roleColors = {
  admin: "bg-red-100 text-red-700 hover:bg-red-200",
  editor: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  author: "bg-green-100 text-green-700 hover:bg-green-200",
  subscriber: "bg-gray-100 text-gray-700 hover:bg-gray-200",
}

const statusColors = {
  active: "bg-green-100 text-green-700 hover:bg-green-200",
  inactive: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  banned: "bg-red-100 text-red-700 hover:bg-red-200",
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "subscriber" as User["role"],
    status: "active" as User["status"],
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    // Load users from localStorage or use defaults
    const savedUsers = localStorage.getItem("blogUsers")
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers))
    } else {
      setUsers(defaultUsers)
      localStorage.setItem("blogUsers", JSON.stringify(defaultUsers))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Name and email are required")
      setLoading(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    // Check if email already exists (excluding current user if editing)
    const existingUser = users.find((user) => user.email === formData.email && user.id !== editingUser?.id)
    if (existingUser) {
      setError("A user with this email already exists")
      setLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (editingUser) {
        // Update existing user
        const updatedUsers = users.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                name: formData.name.trim(),
                email: formData.email.trim(),
                role: formData.role,
                status: formData.status,
              }
            : user,
        )
        setUsers(updatedUsers)
        localStorage.setItem("blogUsers", JSON.stringify(updatedUsers))
        setSuccess("User updated successfully!")
      } else {
        // Create new user
        const newUser: User = {
          id: Date.now().toString(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          role: formData.role,
          status: formData.status,
          avatar: "",
          postCount: 0,
          lastLogin: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        }
        const updatedUsers = [...users, newUser]
        setUsers(updatedUsers)
        localStorage.setItem("blogUsers", JSON.stringify(updatedUsers))
        setSuccess("User created successfully!")
      }

      setFormData({ name: "", email: "", role: "subscriber", status: "active" })
      setEditingUser(null)
      setIsDialogOpen(false)
    } catch (err) {
      setError("Failed to save user. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (userId: string) => {
    const user = users.find((u) => u.id === userId)
    if (!user) return

    if (user.role === "admin" && users.filter((u) => u.role === "admin").length === 1) {
      setError("Cannot delete the last admin user. Please assign admin role to another user first.")
      return
    }

    if (confirm(`Are you sure you want to delete "${user.name}"? This action cannot be undone.`)) {
      const updatedUsers = users.filter((u) => u.id !== userId)
      setUsers(updatedUsers)
      localStorage.setItem("blogUsers", JSON.stringify(updatedUsers))
      setSuccess("User deleted successfully!")
    }
  }

  const handleStatusChange = async (userId: string, newStatus: User["status"]) => {
    const updatedUsers = users.map((user) => (user.id === userId ? { ...user, status: newStatus } : user))
    setUsers(updatedUsers)
    localStorage.setItem("blogUsers", JSON.stringify(updatedUsers))
    setSuccess(`User status updated to ${newStatus}`)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setEditingUser(null)
    setFormData({ name: "", email: "", role: "subscriber", status: "active" })
    setError("")
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-1 text-sm md:text-base">Manage user accounts and permissions</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setEditingUser(null)}>
                <UserPlus className="h-4 w-4 mr-2" />
                New User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-serif text-xl font-bold">
                  {editingUser ? "Edit User" : "Create New User"}
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
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name..."
                    className="mt-1"
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address..."
                    className="mt-1"
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                    Role
                  </Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value: User["role"]) => setFormData({ ...formData, role: value })}
                    disabled={loading}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="author">Author</SelectItem>
                      <SelectItem value="subscriber">Subscriber</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status" className="text-sm font-medium text-gray-700">
                    Status
                  </Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: User["status"]) => setFormData({ ...formData, status: value })}
                    disabled={loading}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="banned">Banned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={handleDialogClose} disabled={loading}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700" disabled={loading}>
                    {loading ? "Saving..." : editingUser ? "Update" : "Create"}
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

        {/* Filters */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="author">Author</SelectItem>
                  <SelectItem value="subscriber">Subscriber</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="banned">Banned</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Users ({filteredUsers.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredUsers.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">No users found</p>
                <p className="text-sm text-gray-500">
                  {searchTerm || roleFilter !== "all" || statusFilter !== "all"
                    ? "Try adjusting your search or filters"
                    : "Create your first user to get started"}
                </p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Posts</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="text-xs">{getInitials(user.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={roleColors[user.role]}>
                          <Shield className="h-3 w-3 mr-1" />
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={statusColors[user.status]}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">{user.postCount} posts</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(user.lastLogin).toLocaleDateString()}
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
                            <DropdownMenuItem onClick={() => handleEdit(user)}>
                              <Edit3 className="h-4 w-4 mr-2" />
                              Edit User
                            </DropdownMenuItem>
                            {user.status === "active" && (
                              <DropdownMenuItem onClick={() => handleStatusChange(user.id, "inactive")}>
                                Deactivate
                              </DropdownMenuItem>
                            )}
                            {user.status === "inactive" && (
                              <DropdownMenuItem onClick={() => handleStatusChange(user.id, "active")}>
                                Activate
                              </DropdownMenuItem>
                            )}
                            {user.status !== "banned" && (
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(user.id, "banned")}
                                className="text-orange-600 focus:text-orange-600"
                              >
                                Ban User
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onClick={() => handleDelete(user.id)}
                              className="text-red-600 focus:text-red-600"
                              disabled={user.role === "admin" && users.filter((u) => u.role === "admin").length === 1}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete User
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
