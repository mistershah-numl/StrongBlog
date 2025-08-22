import { StrongNavigation } from "@/components/strong-navigation"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  { name: "Brock Ferguson", title: "CEO • FOUNDER", image: "/team/brock.jpg" },
  { name: "Jacob Zweig", title: "CTO • FOUNDER", image: "/team/jacob-z.jpg" },
  { name: "Jacob Park", title: "EXECUTIVE", image: "/team/jacob-p.jpg" },
  { name: "Chris Anyang", title: "COO • ARCHITECT", image: "/team/chris.jpg" },
  { name: "Nixa Singer", title: "HEAD • DESIGNER", image: "/team/nixa.jpg" },
  { name: "Francisco Gonzalez", title: "SENIOR • DEVELOPER", image: "/team/francisco.jpg" },
  { name: "James Townsend", title: "LEAD • SPECIALIST", image: "/team/james.jpg" },
  { name: "Cody Dirks", title: "DATA • ARCHITECT", image: "/team/cody.jpg" },
  { name: "Matt Alberg", title: "LEAD • SPECIALIST", image: "/team/matt.jpg" },
  { name: "Osman Shankat", title: "SENIOR • DEVELOPER", image: "/team/osman.jpg" },
  { name: "Grant Vermillion", title: "LEAD • SPECIALIST", image: "/team/grant.jpg" },
  { name: "Andy Wong", title: "SENIOR • DEVELOPER", image: "/team/andy.jpg" },
  { name: "Noah Salas", title: "DATA • SPECIALIST", image: "/team/noah.jpg" },
  { name: "Jack Toral", title: "SENIOR • DEVELOPER", image: "/team/jack.jpg" },
  { name: "Chris Mania", title: "LEAD • SPECIALIST", image: "/team/chris-m.jpg" },
  { name: "Elizabeth Monroe", title: "PROJECT • MANAGER", image: "/team/elizabeth.jpg" },
  { name: "Michael Clark", title: "DATA • ARCHITECT", image: "/team/michael.jpg" },
  { name: "Max Gallero", title: "SENIOR • DEVELOPER", image: "/team/max.jpg" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <StrongNavigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/city-skyline.png" alt="City skyline" fill className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Our Team
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              Meet our DaVinci Analytics team of experts who are passionate about data science and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* We Are All DaVinci Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-500 mb-8 sm:mb-12 tracking-wider">WE ARE ALL DaVinci</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              DaVinci Analytics is a leading provider of custom machine learning software and data science solutions.
            </p>
            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Our team of machine learning scientists and engineers brings a wealth of knowledge and experience to every
              project. We specialize in developing cutting-edge algorithms and models that drive business value and
              innovation.
            </p>
            <p className="text-gray-700 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
              From predictive analytics to computer vision, we tackle the most challenging data science problems with
              creativity and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="bg-[#4C6FE7] text-white px-8 sm:px-10 py-4 rounded-sm hover:bg-blue-700 transition-colors font-medium text-center text-base sm:text-lg border-2 border-transparent hover:border-white"
              >
                GET IN TOUCH
              </Link>
              <Link
                href="/work"
                className="border-2 border-[#4C6FE7] text-[#4C6FE7] px-8 sm:px-10 py-4 rounded-sm hover:bg-[#4C6FE7] hover:text-white transition-colors font-medium text-center text-base sm:text-lg"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 leading-tight">
                Our Values
              </h2>
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">INTEGRITY</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    We're dedicated to our clients. Our needs and problems always come first, and we work with complete
                    transparency to deliver exceptional results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">EXPERTISE</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    We believe in knowledge and rigorous industry standards. Our team consists of PhD-level data
                    scientists and experienced engineers who bring deep expertise to every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">COLLABORATION</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Every one of our partners is different from us, we leverage market-tested best practices, but we're
                    also flexible enough to adapt to your unique needs and requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">EXCELLENCE</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    We strive for excellence and efficiency in everything we do. From project management to final
                    delivery, we maintain the highest standards of quality and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="/team-meeting.png"
                alt="Team meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 sm:mb-20 leading-tight">
            Our Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6">
                  <Image
                    src={`/placeholder_svg.png?height=112&width=112&text=${member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}`}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 sm:mb-20 leading-tight">
            Join our growing team!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="px-4">
              <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Top-tier benefits</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Comprehensive health, dental, and vision insurance. Generous PTO and flexible work arrangements.
              </p>
            </div>
            <div className="px-4">
              <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Flexible, remote work</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Work from home with flexible hours and modern tools to support your productivity.
              </p>
            </div>
            <div className="px-4">
              <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                Collaborative and growth-focused
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Learn from industry experts and advance your career with continuous learning opportunities.
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="bg-[#4C6FE7] text-white px-8 sm:px-10 py-4 rounded-sm hover:bg-blue-700 transition-colors font-medium inline-block text-base sm:text-lg border-2 border-transparent hover:border-white"
          >
            JOIN OUR TEAM
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#4C6FE7" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Work with DaVinci.</h3>
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-md text-base sm:text-lg leading-relaxed">
                Find out how DaVinci can help you tackle your most challenging data science and machine learning
                projects.
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#4C6FE7] px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-gray-100 transition-colors font-medium inline-block text-base sm:text-lg"
              >
                GET IN TOUCH
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">SOLUTIONS</h4>
              <ul className="space-y-3 text-blue-100 text-sm sm:text-base">
                <li>
                  <Link href="/platforms" className="hover:text-white transition-colors">
                    PLATFORMS
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="hover:text-white transition-colors">
                    EXPERTISE
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    BLOG
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">ABOUT US</h4>
              <ul className="space-y-3 text-blue-100 text-sm sm:text-base">
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-white transition-colors">
                    PARTNERSHIPS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-12 sm:mt-16 pt-8 sm:pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold">DaVinci</span>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm text-center sm:text-right">
                © 2024 DAVINCI ANALYTICS. A PERSONAL BLOG. CHICAGO, IL, USA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
