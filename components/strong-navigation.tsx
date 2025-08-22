"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function StrongNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "EXPERTISE", href: "/expertise" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "WORK", href: "/work" },
    { name: "BLOG", href: "/blog" },
    { name: "PLATFORMS", href: "/platforms" },
    { name: "ABOUT US", href: "/about" },
  ]

  const handleConsultationClick = () => {
    // For now, show an alert. In production, this could open a modal or redirect to a contact form
    alert("Thank you for your interest! Please contact us at contact@strong.io to book your free AI consultation.")
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold text-black font-canela">DaVinci</span>
            <span className="text-xs text-gray-500 ml-2 font-karla">Personal Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 tracking-wide font-atc-harris whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                  {pathname === item.href && (
                    <div
                      className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600"
                      style={{ backgroundColor: "#4C6FE7" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-shrink-0">
            <Button
              variant="strong"
              className="text-white px-8 py-6 text-sm font-medium tracking-wide font-atc-harris h-16 rounded-none hover:bg-white hover:text-blue-600 cursor-pointer"
              style={{ backgroundColor: "#4C6FE7" }}
              onClick={handleConsultationClick}
            >
              BOOK A FREE AI CONSULTATION
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 font-atc-harris"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  variant="strong"
                  className="text-white w-full mt-8 font-atc-harris hover:bg-white hover:text-blue-600 cursor-pointer"
                  style={{ backgroundColor: "#4C6FE7" }}
                  onClick={handleConsultationClick}
                >
                  BOOK A FREE AI CONSULTATION
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
