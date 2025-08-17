"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LayoutDashboard, FileText, Plus, BarChart3, Settings, Users, Tags, Home, LogOut, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "All Posts", href: "/admin/posts", icon: FileText },
  { name: "New Post", href: "/admin/posts/new", icon: Plus },
  { name: "Categories", href: "/admin/categories", icon: Tags },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  const NavigationContent = () => (
    <>
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="font-serif text-lg lg:text-xl font-bold text-gray-900">Strong Blog</div>
          <Badge variant="secondary" className="text-xs">
            Admin
          </Badge>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 lg:p-4">
        <ul className="space-y-1 lg:space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 lg:py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-purple-50 text-purple-700 border border-purple-200"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 lg:p-4 border-t border-gray-200">
        <div className="space-y-1 lg:space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:text-gray-900 text-sm py-2.5 lg:py-2"
            >
              <Home className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="truncate">View Site</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-gray-900 text-sm py-2.5 lg:py-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-3 flex-shrink-0" />
            <span className="truncate">Sign Out</span>
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
        <NavigationContent />
      </div>

      {/* Mobile/Tablet Header and Sidebar */}
      <div className="lg:hidden">
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-40">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-lg font-bold text-gray-900">Strong Blog</div>
            <Badge variant="secondary" className="text-xs">
              Admin
            </Badge>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <NavigationContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
