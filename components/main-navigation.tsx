"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/blog" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface MainNavigationProps {
  variant?: "light" | "dark"
}

export function MainNavigation({ variant = "light" }: MainNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const textColor = variant === "light" ? "text-gray-600 hover:text-gray-900" : "text-white/90 hover:text-white"
  const activeColor = variant === "light" ? "text-purple-600 font-semibold" : "text-white font-semibold"
  const logoColor = variant === "light" ? "text-gray-900" : "text-white"

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className={`font-serif text-2xl font-bold ${logoColor}`}>
        Strong Blog
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${isActive ? activeColor : textColor}`}
            >
              {item.name}
            </Link>
          )
        })}
        <Link href="/admin" className={`transition-colors ${pathname.startsWith("/admin") ? activeColor : textColor}`}>
          Admin
        </Link>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="sm" className={variant === "dark" ? "text-white hover:bg-white/10" : ""}>
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="font-serif text-xl font-bold text-gray-900" onClick={() => setIsOpen(false)}>
              Strong Blog
            </Link>
          </div>
          <nav className="space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/admin"
              className={`block py-2 px-3 rounded-lg transition-colors ${
                pathname.startsWith("/admin")
                  ? "bg-purple-50 text-purple-700 font-semibold"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
