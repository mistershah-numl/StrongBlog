"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { AdminAuthGuard } from "@/components/admin-auth-guard"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return <AdminAuthGuard>{children}</AdminAuthGuard>
}
