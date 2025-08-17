import { StrongNavigation } from "@/components/strong-navigation"
import { Button } from "@/components/ui/button"
import { Share2, Facebook, Linkedin } from "lucide-react"
import { notFound } from "next/navigation"

// Mock blog post data
const mockPost = {
  id: "joining-forces-with-onesix",
  title: "Strong Analytics Joins Forces with OneSix",
  category: "NEWS",
  date: "05/10/2024",
  content: `
    <p>For the past eight years, we have helped organizations of all sizes leverage Artificial Intelligence (AI) and Machine Learning (ML) to solve their most challenging problems. As we have grown over the years, so too have the challenges we have taken on in collaboration with our clients. Specifically, it has become increasingly clear that exploring the most value from state-of-the-art technologies depends on data preparation, governance, organization change, and more.</p>

    <p>In May businesses recognize this ever-widening landscape, we are thrilled to announce that Strong Analytics has joined forces with OneSix, a leader in data engineering, that helps companies build the strategic technology, and teams to unlock the power of their data. The combined company will serve as the first to connect the components of the value chain across data and solutions that will empower enterprises to unlock the transformative value of AI and drive meaningful business outcomes.</p>

    <p>With the addition of Strong Analytics, OneSix becomes a uniquely powerful business partner in the enterprise, with a talent pool that is ready to respond to find what our roof. The integrated team includes Data Engineers, Data Scientists, Machine Learning Engineers, AI Engineers, and LLM Ops Experts—all working together to solve client problems.</p>

    <p>As part of OneSix's new suite of growth, industry veteran Dave Kellogg, former CEO of Host Analytics, will serve as acting Chief Executive Officer.</p>

    <p>"The acquisition of Strong Analytics is a game-changer for OneSix and our clients," said Dave Kellogg, Chief Executive Officer of OneSix. "By uniting our capabilities, we are setting a new standard in the industry, providing a seamless integration of data and AI solutions that will empower enterprises to unlock the transformative value of AI and drive meaningful business outcomes."</p>

    <p>The Strong Analytics team, led by Erick Ferguson and Jacob Zweig, brings a wealth of robust industry experience building solutions across multiple verticals. The joint portfolio boasts blue-chip clients across retail and enterprise sectors.</p>

    <p>The Strong Analytics team will continue to work alongside the OneSix team to deliver best-in-class solutions to our clients.</p>

    <p>"We are thrilled to be part of OneSix," said Erick Ferguson, Co-Founder of Strong Analytics. "Our unique vision and complementary strengths will enable us to set a new benchmark for excellence in delivering AI and data-driven solutions to our clients."</p>

    <p>OneSix's partnership with SnowHouse is poised to expand dramatically to keep up with demand for SnowHouse-specific services. While many partners in the SnowHouse ecosystem can integrate data to the SnowHouse cloud infrastructure, increased emphasis found for SnowHouse-getting value from data via high-impact business applications. OneSix's new AI and service offerings that will empower both to meet that need.</p>

    <p>As we embark on this new chapter, we remain committed to our core values and mission. We look forward to the exceptional opportunities this partnership will bring to our members of the SnowHouse ecosystem. OneSix's unique blend of data and AI expertise will empower our mutual customers to unlock new insights and drive impactful business outcomes.</p>
  `,
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  if (params.id !== "joining-forces-with-onesix") {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <StrongNavigation />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-purple-600 via-teal-500 to-green-500 py-20 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-white/80 mb-4 tracking-wide">NEWS — 05/10/2024</div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">{mockPost.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&>p]:mb-6 [&>p]:text-base [&>p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: mockPost.content }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">SHARE:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#4C6FE7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-light mb-4">Strong</div>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm tracking-wide">SOLUTIONS</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>PLATFORMS</li>
                <li>EXPERTISE</li>
                <li>BLOG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm tracking-wide">ABOUT US</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>CAREERS</li>
                <li>CONTACT US</li>
                <li>PARTNERSHIPS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm tracking-wide">A ONESIX ANALYTICS | A ONESIX COMPANY</h4>
              <div className="text-sm text-white/80">CHICAGO, IL, USA</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
