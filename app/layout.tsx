import type React from "react"
import type { Metadata } from "next"
import { Karla } from "next/font/google"
import "./globals.css"

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Strong Blog - Insights & Stories",
  description: "A modern blog platform inspired by strong design principles",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${karla.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'ATC Harris';
              src: url('https://use.typekit.net/af/cb695f/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'Canela';
              src: url('https://use.typekit.net/af/8daaa2/00000000000000003b9b2034/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2');
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }
          `,
          }}
        />
      </head>
      <body className="font-karla">{children}</body>
    </html>
  )
}
