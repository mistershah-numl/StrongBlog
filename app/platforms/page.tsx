import { StrongNavigation } from "@/components/strong-navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PlatformsPage() {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <StrongNavigation />

            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#4C6FE7" }}>
                <div className="relative z-10 flex items-center justify-between min-h-screen px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-canela font-light leading-tight mb-8">
                            Strong
                            <br />
                            Platforms
                        </h1>
                        <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-lg font-karla">
                            Our platforms provide a shared foundation
                            <br />
                            upon which to deliver, build and deploy
                            <br />
                            custom machine learning and artificial
                            <br />
                            intelligence solutions.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="w-64 h-64">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Navigation */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center space-x-8 sm:space-x-12">
                        {["STRONG BI", "STRONG ML", "STRONG VISION", "STRONG FORECAST"].map((platform) => (
                            <a
                                key={platform}
                                href={`#${platform.toLowerCase().replace(" ", "-")}`}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 font-atc-harris tracking-wide"
                            >
                                {platform}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strong BI Section */}
            <section id="strong-bi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-80 h-80 mx-auto lg:mx-0">
                                <svg viewBox="0 0 300 300" className="w-full h-full">
                                    {/* Tree-like network visualization */}
                                    <g stroke="#4C6FE7" strokeWidth="1" fill="none" opacity="0.6">
                                        {/* Main trunk */}
                                        <line x1="150" y1="250" x2="150" y2="150" />
                                        {/* Branches */}
                                        <line x1="150" y1="150" x2="100" y2="100" />
                                        <line x1="150" y1="150" x2="200" y2="100" />
                                        <line x1="100" y1="100" x2="70" y2="70" />
                                        <line x1="100" y1="100" x2="130" y2="70" />
                                        <line x1="200" y1="100" x2="170" y2="70" />
                                        <line x1="200" y1="100" x2="230" y2="70" />
                                        {/* Sub-branches */}
                                        <line x1="70" y1="70" x2="50" y2="50" />
                                        <line x1="70" y1="70" x2="90" y2="50" />
                                        <line x1="130" y1="70" x2="110" y2="50" />
                                        <line x1="130" y1="70" x2="150" y2="50" />
                                        <line x1="170" y1="70" x2="150" y2="50" />
                                        <line x1="170" y1="70" x2="190" y2="50" />
                                        <line x1="230" y1="70" x2="210" y2="50" />
                                        <line x1="230" y1="70" x2="250" y2="50" />
                                    </g>
                                    {/* Nodes */}
                                    <g fill="#4C6FE7">
                                        <circle cx="150" cy="250" r="4" />
                                        <circle cx="150" cy="150" r="3" />
                                        <circle cx="100" cy="100" r="3" />
                                        <circle cx="200" cy="100" r="3" />
                                        <circle cx="70" cy="70" r="2" />
                                        <circle cx="130" cy="70" r="2" />
                                        <circle cx="170" cy="70" r="2" />
                                        <circle cx="230" cy="70" r="2" />
                                        <circle cx="50" cy="50" r="2" />
                                        <circle cx="90" cy="50" r="2" />
                                        <circle cx="110" cy="50" r="2" />
                                        <circle cx="150" cy="50" r="2" />
                                        <circle cx="190" cy="50" r="2" />
                                        <circle cx="210" cy="50" r="2" />
                                        <circle cx="250" cy="50" r="2" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">Strong BI.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-karla">
                                Build more intelligent business intelligence
                                <br />
                                reports, dashboards and optimize using
                                <br />
                                advanced machine learning based algorithms,
                                <br />
                                models and techniques.
                            </p>
                            <Button
                                className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
                                style={{ backgroundColor: "#4C6FE7" }}
                            >
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strong ML Section */}
            <section id="strong-ml" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">Strong ML.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-karla">
                                Rapidly build and deploy machine learning
                                <br />
                                algorithms and models using our web applications.
                            </p>
                            <Button
                                className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
                                style={{ backgroundColor: "#4C6FE7" }}
                            >
                                LEARN MORE
                            </Button>
                        </div>
                        <div>
                            <div className="w-80 h-80 mx-auto lg:mx-0">
                                <svg viewBox="0 0 300 300" className="w-full h-full">
                                    {/* Circular dotted pattern */}
                                    {Array.from({ length: 8 }, (_, ring) => {
                                        const radius = 30 + ring * 15
                                        const dots = 8 + ring * 4
                                        return Array.from({ length: dots }, (_, i) => {
                                            const angle = (i * 360) / dots
                                            const x = 150 + radius * Math.cos((angle * Math.PI) / 180)
                                            const y = 150 + radius * Math.sin((angle * Math.PI) / 180)
                                            return (
                                                <circle key={`${ring}-${i}`} cx={x} cy={y} r="2" fill="#4C6FE7" opacity={0.7 - ring * 0.08} />
                                            )
                                        })
                                    })}
                                    <circle cx="150" cy="150" r="4" fill="#4C6FE7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strong Vision Section */}
            <section id="strong-vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">Strong Vision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-karla">
                                Custom, enterprise-ready computer vision
                                <br />
                                learning system models to solve your unique
                                <br />
                                business challenges.
                            </p>
                            <Button
                                className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
                                style={{ backgroundColor: "#4C6FE7" }}
                            >
                                LEARN MORE
                            </Button>
                        </div>
                        <div>
                            <div className="w-80 h-80 mx-auto lg:mx-0 p-8" style={{ backgroundColor: "#4C6FE7" }}>
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {/* Grid pattern with dots */}
                                    {Array.from({ length: 15 }, (_, row) =>
                                        Array.from({ length: 15 }, (_, col) => (
                                            <circle
                                                key={`${row}-${col}`}
                                                cx={10 + col * 12}
                                                cy={10 + row * 12}
                                                r="1.5"
                                                fill="white"
                                                opacity={0.8}
                                            />
                                        )),
                                    )}
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strong Forecast Section */}
            <section id="strong-forecast" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">Strong Forecast</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-karla">
                                Predict the future using state of the art forecasts.
                                <br />
                                Easily connect machine learning models to your
                                <br />
                                business data to generate predictions and
                                <br />
                                actionable insights.
                            </p>
                            <Button
                                className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
                                style={{ backgroundColor: "#4C6FE7" }}
                            >
                                LEARN MORE
                            </Button>
                        </div>
                        <div>
                            <div className="w-80 h-80 mx-auto lg:mx-0">
                                <svg viewBox="0 0 300 300" className="w-full h-full">
                                    {/* Dotted pattern with circular elements */}
                                    {Array.from({ length: 20 }, (_, row) =>
                                        Array.from({ length: 20 }, (_, col) => (
                                            <circle
                                                key={`${row}-${col}`}
                                                cx={15 + col * 13}
                                                cy={15 + row * 13}
                                                r="1"
                                                fill="#4C6FE7"
                                                opacity={0.4}
                                            />
                                        )),
                                    )}
                                    {/* Larger circles */}
                                    <circle cx="100" cy="100" r="8" fill="none" stroke="#4C6FE7" strokeWidth="2" opacity="0.6" />
                                    <circle cx="200" cy="150" r="12" fill="none" stroke="#4C6FE7" strokeWidth="2" opacity="0.6" />
                                    <circle cx="150" cy="200" r="6" fill="none" stroke="#4C6FE7" strokeWidth="2" opacity="0.6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                quote:
                                    "It was an absolute pleasure working with Strong Analytics; their technical expertise is as deep as it is broad... in the case of complex, unstructured problems, they blazed a trail for us when the path forward was unclear.",
                                author: "CHARLOTTE",
                                title: "HEAD OF DATA",
                                company: "FINTECH STARTUP",
                            },
                            {
                                quote:
                                    "Partnering with Strong Analytics has taken Reup further faster against our product vision than we could have anticipated. They are the rocket fuel for innovation, and our collaboration continues to yield exceptional results for data science initiatives thanks to their expertise and commitment to results.",
                                author: "JACK ASPINWALL",
                                title: "CO-FOUNDER",
                                company: "REUP",
                            },
                        ].map((testimonial, index) => (
                            <Card key={index} className="p-8 bg-gray-50 border-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-karla">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                    <div>
                                        <div className="text-gray-900 font-atc-harris font-medium">{testimonial.author}</div>
                                        <div className="text-gray-600 text-sm font-karla">
                                            {testimonial.title}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work with Strong Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-canela font-light text-gray-900 mb-6">
                                Work with
                                <br />
                                Strong.
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-karla">
                                Find out how Strong can help you tackle your most
                                <br />
                                challenging data science and machine learning
                                <br />
                                projects.
                            </p>
                            <Button
                                className="text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase hover:bg-white hover:text-blue-600 transition-all duration-200"
                                style={{ backgroundColor: "#4C6FE7" }}
                            >
                                GET IN TOUCH
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#4C6FE7" }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-canela font-light mb-4 text-white">Strong</div>
                            <p className="text-white/70 text-sm font-karla">A OneSix Company</p>
                        </div>
                        <div>
                            <h4 className="font-atc-harris font-medium mb-4 text-white">SOLUTIONS</h4>
                            <ul className="space-y-2 text-white/70 text-sm font-karla">
                                <li>PLATFORMS</li>
                                <li>EXPERTISE</li>
                                <li>BLOG</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-atc-harris font-medium mb-4 text-white">ABOUT US</h4>
                            <ul className="space-y-2 text-white/70 text-sm font-karla">
                                <li>CAREERS</li>
                                <li>CONTACT US</li>
                                <li>PARTNERSHIPS</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-white/70 text-sm font-karla">
                                © 2024 STRONG ANALYTICS. A ONESIX COMPANY.
                                <br />
                                CHICAGO, IL, USA
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
