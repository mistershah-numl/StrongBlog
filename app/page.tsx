import { StrongNavigation } from "@/components/strong-navigation"
import { CircularPattern } from "@/components/circular-pattern"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <StrongNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#4C6FE7" }}>
        <div className="relative z-10 flex items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-canela font-light leading-tight mb-8">
              We are Strong.
            </h1>
            <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-lg font-karla">
              We build bespoke data science, machine learning, and artificial intelligence solutions.
            </p>
            <div className="w-full max-w-lg h-px bg-white mb-8"></div>
            <Button
              className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200"
              size="lg"
            >
              CONTACT US
            </Button>
          </div>
        </div>
        <CircularPattern />
      </section>

      {/* News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-canela font-light text-gray-900 mb-6">
            Strong Analytics Joins Forces with OneSix
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-karla">
            We're excited to announce that Strong Analytics has joined forces with OneSix, a leading digital
            transformation consultancy. This partnership strengthens our ability to deliver end-to-end data science and
            AI solutions.
          </p>
          <Button
            className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
            style={{ backgroundColor: "#4C6FE7" }}
          >
            READ MORE
          </Button>
        </div>
      </section>

      {/* Design & Build Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-8">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {Array.from({ length: 12 }, (_, i) => (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={10 + i * 8}
                      fill="none"
                      stroke="#4C6FE7"
                      strokeWidth="1"
                      opacity={0.6 - i * 0.04}
                    />
                  ))}
                  <circle cx="100" cy="100" r="4" fill="#4C6FE7" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">
                We design and build solutions.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-karla">
                Our team of data scientists, engineers, and designers work together to create bespoke solutions that
                solve complex business problems. We combine cutting-edge technology with human-centered design to
                deliver results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">
                Shape the cross-industry experience.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-karla">
                We work across industries to understand unique challenges and opportunities. Our cross-sector expertise
                allows us to bring innovative solutions from one industry to another, creating competitive advantages
                for our clients.
              </p>
            </div>
            <div>
              <div className="w-48 h-48 mx-auto lg:mx-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {Array.from({ length: 8 }, (_, i) => (
                    <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                      <line x1="100" y1="20" x2="100" y2="40" stroke="#4C6FE7" strokeWidth="2" opacity="0.6" />
                      <circle cx="100" cy="30" r="3" fill="#4C6FE7" opacity="0.8" />
                    </g>
                  ))}
                  <circle cx="100" cy="100" r="8" fill="#4C6FE7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-56 h-56 mx-auto lg:mx-0 mb-8">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {Array.from({ length: 20 }, (_, i) => {
                    const angle = (i * 18 * Math.PI) / 180
                    const radius = 60 + (i % 3) * 20
                    const x = 100 + radius * Math.cos(angle)
                    const y = 100 + radius * Math.sin(angle)
                    return (
                      <g key={i}>
                        <line x1="100" y1="100" x2={x} y2={y} stroke="#4C6FE7" strokeWidth="1" opacity="0.3" />
                        <circle cx={x} cy={y} r="2" fill="#4C6FE7" opacity="0.7" />
                      </g>
                    )
                  })}
                  <circle cx="100" cy="100" r="6" fill="#4C6FE7" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">Powered by expertise.</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-karla">
                Our team brings together decades of experience in data science, machine learning, and artificial
                intelligence. We stay at the forefront of technological advancement to deliver solutions that drive real
                business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Top Brands */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-canela font-light text-gray-900 mb-12">Trusted by Top Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["H&M", "Volvo", "IKEA", "Spotify", "Klarna", "Ericsson"].map((brand) => (
              <div key={brand} className="text-2xl font-atc-harris font-bold text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#4C6FE7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-canela font-light text-white mb-6">
                Improving the effectiveness of cross-channel marketing spend.
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 font-karla">
                We helped a leading retailer optimize their marketing spend across multiple channels, resulting in a 35%
                improvement in ROI and better customer targeting.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                VIEW CASE STUDY
              </Button>
            </div>
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="h-64 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="text-white/60 text-lg font-karla">Marketing Analytics Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">Our Platforms</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-karla">
              We've built powerful platforms that accelerate data science and AI implementation across different
              business functions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Strong BI",
                description: "Advanced business intelligence platform for data visualization and reporting.",
                icon: "📊",
              },
              {
                name: "Strong ML",
                description: "Machine learning platform for building and deploying predictive models.",
                icon: "🤖",
              },
              {
                name: "Strong Vision",
                description: "Computer vision platform for image and video analysis applications.",
                icon: "👁️",
              },
            ].map((platform) => (
              <Card key={platform.name} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-canela font-light text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 leading-relaxed font-karla">{platform.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#4C6FE7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "Strong Analytics transformed our data infrastructure and helped us make better decisions faster.",
                author: "Sarah Johnson",
                title: "Chief Data Officer",
                company: "TechCorp",
              },
              {
                quote: "The AI solutions they built for us have revolutionized our customer experience and operations.",
                author: "Michael Chen",
                title: "VP of Innovation",
                company: "RetailPlus",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <p className="text-white text-lg leading-relaxed mb-6 font-karla">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                  <div>
                    <div className="text-white font-atc-harris font-medium">{testimonial.author}</div>
                    <div className="text-white/70 text-sm font-karla">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-canela font-light mb-6">Work with Strong</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-karla">
              Ready to transform your business with data science and AI? Let's discuss how we can help you achieve your
              goals.
            </p>
            <Button
              className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
              style={{ backgroundColor: "#4C6FE7" }}
            >
              GET IN TOUCH
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-canela font-light mb-4">Strong</div>
                <p className="text-gray-400 text-sm font-karla">A OneSix Company</p>
              </div>
              <div>
                <h4 className="font-atc-harris font-medium mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400 text-sm font-karla">
                  <li>Data Science</li>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                  <li>Analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-atc-harris font-medium mb-4">Industries</h4>
                <ul className="space-y-2 text-gray-400 text-sm font-karla">
                  <li>Retail</li>
                  <li>Finance</li>
                  <li>Healthcare</li>
                  <li>Technology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-atc-harris font-medium mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400 text-sm font-karla">
                  <li>hello@strong.io</li>
                  <li>+1 (555) 123-4567</li>
                  <li>Stockholm, Sweden</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
