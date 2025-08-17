import { StrongNavigation } from "@/components/strong-navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Mock blog posts data
const mockPosts = [
  {
    id: "joining-forces-with-onesix",
    title: "Strong Analytics Joins Forces with OneSix",
    excerpt:
      "We are thrilled to announce that Strong Analytics has joined forces with OneSix, a leader in data engineering.",
    author: "FRANCIS GONZALEZ",
    date: "06/10/2024",
    category: "NEWS",
    tags: ["TECHNICAL"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "deep-learning-augmented-perception",
    title: "A Deep Dive into Retrieval Augmented Generation (RAG) for Fine-tuning",
    excerpt: "Exploring advanced techniques in deep learning for enhanced perception systems.",
    author: "CHRIS NGUYEN",
    date: "04/17/2024",
    category: "TECHNICAL",
    tags: ["TECHNICAL"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "real-time-decisions-video-analytics",
    title: "AI-Powered Streaming Vision: Transforming Real-Time Decisions with Video Analytics",
    excerpt: "How video analytics is revolutionizing real-time decision making across industries.",
    author: "FRANCISCO GONZALEZ",
    date: "07/01/2024",
    category: "CASE STUDY",
    tags: ["CASE STUDY", "TECHNICAL", "COMPUTER VISION", "MACHINE LEARNING"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "marketing-optimization-media-mix",
    title: "Marketing Optimization with Media Mix Modeling: Strategic Approach",
    excerpt: "Strategic approaches to marketing optimization using advanced media mix modeling techniques.",
    author: "MICHAEL CLARK",
    date: "10/04/2023",
    category: "STRATEGY",
    tags: ["STRATEGY", "TECHNICAL", "STATISTICS", "MARKETING", "MARKETING MIX MODELING"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "case-study-mta-improve-business",
    title: "Case Study: Using MTA to Improve Marketing Effectiveness",
    excerpt: "Real-world case study demonstrating the power of Multi-Touch Attribution in marketing.",
    author: "GRANT VERMILLION",
    date: "09/06/2023",
    category: "CASE STUDY",
    tags: ["CASE STUDY", "PHARMACEUTICALS", "MARKETING"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "personalized-marketing-campaigns",
    title: "Case Study: Optimizing Personalized Marketing Campaigns at Scale",
    excerpt: "How we helped optimize personalized marketing campaigns for enterprise clients.",
    author: "BROCK FERGUSON",
    date: "05/31/2023",
    category: "CASE STUDY",
    tags: ["CASE STUDY", "MARKETING", "REAL ESTATE"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "multi-channel-marketing-optimization",
    title: "Case Study: One-to-One, Multi-Channel Marketing Optimisation",
    excerpt: "Optimizing multi-channel marketing strategies for maximum effectiveness.",
    author: "BROCK FERGUSON",
    date: "05/27/2023",
    category: "CASE STUDY",
    tags: ["CASE STUDY", "GAMING"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "geographic-demand-optimization",
    title: "Case Study: Optimizing Ingredients based on Geographic Demand",
    excerpt: "Geographic analysis and optimization strategies for ingredient sourcing.",
    author: "JOSEPH DAY",
    date: "05/17/2023",
    category: "CASE STUDY",
    tags: ["CASE STUDY", "FOODSERVICE"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "visual-crop-detection",
    title: "Case Study: Improving Visual Crop Detection Algorithm",
    excerpt: "Advanced computer vision techniques for agricultural applications.",
    author: "NINA SINGER",
    date: "05/10/2023",
    category: "CASE STUDY",
    tags: ["CASE STUDY", "TECHNOLOGY & SOFTWARE", "AGRICULTURE"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "large-language-models",
    title: "3 Uses of Large Language Models in the Insurance Industry",
    excerpt: "Exploring applications of LLMs in insurance and financial services.",
    author: "JULIAN WHITING",
    date: "04/26/2023",
    category: "IDEAS",
    tags: ["IDEAS", "LARGE LANGUAGE MODELS", "TRAVEL"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "generative-ai-applications",
    title: "Applications of Generative AI: A Deep Dive into Methods and Techniques",
    excerpt: "Comprehensive overview of generative AI applications and methodologies.",
    author: "JASON AMATO",
    date: "04/19/2023",
    category: "TECHNICAL",
    tags: ["TECHNICAL", "GENERATIVE AI"],
    image: "/abstract-geometric-shapes.png",
  },
  {
    id: "machine-learning-pharmaceuticals",
    title: "5 Ways Machine Learning is Changing Pharmaceuticals",
    excerpt: "The transformative impact of ML on pharmaceutical research and development.",
    author: "JENNA RODRIGUES",
    date: "04/12/2023",
    category: "IDEAS",
    tags: ["IDEAS", "PHARMACEUTICALS", "MACHINE LEARNING"],
    image: "/abstract-geometric-shapes.png",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <StrongNavigation />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
          {/* Additional flowing lines pattern */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path d="M50,200 Q200,50 350,200 T650,200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
              <path d="M50,220 Q200,70 350,220 T650,220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
              <path d="M50,240 Q200,90 350,240 T650,240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Strong Analytics Joins
            <br />
            Forces with OneSix
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
            We are thrilled to announce that Strong Analytics has joined forces with OneSix, a leader in data
            engineering.
          </p>
          <Button className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-none">
            READ MORE
          </Button>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
            <div className="relative">
              <select className="appearance-none bg-white border-0 border-b border-gray-300 px-0 py-3 pr-8 text-sm text-gray-600 focus:outline-none focus:border-gray-500 bg-transparent">
                <option>ALL CATEGORIES</option>
                <option>TECHNICAL</option>
                <option>CASE STUDY</option>
                <option>NEWS</option>
                <option>STRATEGY</option>
                <option>IDEAS</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH ALL POSTS"
                className="bg-white border-0 border-b border-gray-300 px-0 py-3 pr-8 text-sm text-gray-600 focus:outline-none focus:border-gray-500 w-64 bg-transparent placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
            {mockPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-sm overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-gray-500 font-medium tracking-wide">{post.date}</div>

                    <h3 className="text-gray-900 text-lg font-normal leading-tight group-hover:text-blue-600 transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    <div className="text-xs text-gray-500 font-medium tracking-wide">
                      BY <span className="text-gray-700">{post.author}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 font-medium tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button key={num} className="w-8 h-8 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {num}
              </button>
            ))}
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium tracking-wide ml-2">
              NEXT
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Work with
            <br />
            Strong.
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Find out how Strong can help you tackle your most challenging data science and machine learning projects.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-none">
            GET IN TOUCH
          </Button>
        </div>
      </section>

      <footer className="text-white py-16" style={{ backgroundColor: '#4C6FE7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-light mb-8">Strong</div>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-wider">SOLUTIONS</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition-colors">PLATFORMS</li>
                <li className="hover:text-white cursor-pointer transition-colors">EXPERTISE</li>
                <li className="hover:text-white cursor-pointer transition-colors">BLOG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-wider">ABOUT US</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition-colors">CAREERS</li>
                <li className="hover:text-white cursor-pointer transition-colors">CONTACT US</li>
                <li className="hover:text-white cursor-pointer transition-colors">PARTNERSHIPS</li>
              </ul>
            </div>
            <div>
              <div className="text-sm text-white/80 leading-relaxed">
                © 2023 STRONG ANALYTICS | A ONESIX COMPANY
                <br />
                CHICAGO, IL, USA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
