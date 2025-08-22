import { StrongNavigation } from "@/components/strong-navigation"

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <StrongNavigation />

            {/* Hero Section */}
            <section className="relative bg-[#4C6FE7] text-white py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-6xl lg:text-7xl font-serif mb-8 leading-tight">
                                Solutions &<br />
                                Industries
                            </h1>
                            <p className="text-xl leading-relaxed mb-8 max-w-lg">
                                We have helped organizations across a wide range of industries leverage the power of data science and
                                machine learning to solve complex business challenges, drive innovation, and achieve measurable results.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-60">
                                <path
                                    d="M50 150 Q150 50 250 150"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                    className="animate-pulse"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Software */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-gray-900">
                                Technology &<br />
                                Software
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our experience and deep-rooted technical expertise enables us to navigate the complex landscape of
                                technology and software. From startups to enterprise-level organizations, we help technology companies
                                harness the power of their data to drive innovation and competitive advantage.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/technology-software-workspace-bw.png"
                                alt="Technology & Software"
                                className="w-full max-w-md grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="lg:order-2">
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-gray-900">Sports</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We bring expertise in the latest insights in sports analytics, helping teams and organizations gain
                                competitive advantages through data-driven decision making. From player performance analysis to fan
                                engagement strategies, we help our clients win both on and off the field.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="lg:order-1 flex justify-center">
                            <img src="/placeholder-x4w4t.png" alt="Sports Analytics" className="w-full max-w-md grayscale" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Automotives */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <img
                                src="/automotive-car-manufacturing-bw.png"
                                alt="Automotive Industry"
                                className="w-full max-w-md grayscale"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-gray-900">Automotives</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We help automotive companies navigate the rapidly evolving landscape of connected vehicles, autonomous
                                driving, and smart manufacturing. Our data science solutions enable automotive companies to optimize
                                operations, enhance customer experiences, and drive innovation in this dynamic industry.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing / Ad-Ops */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-gray-900">
                                Marketing / Ad-
                                <br />
                                Ops
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We empower marketing and advertising teams with advanced analytics and machine learning solutions. From
                                customer segmentation and personalization to campaign optimization and attribution modeling, we help
                                marketing teams maximize ROI and drive meaningful customer engagement.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img src="/marketing-analytics-bw.png" alt="Marketing & Ad-Ops" className="w-full max-w-md grayscale" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gaming */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <img src="/gaming-dice-casino-bw.png" alt="Gaming Industry" className="w-full max-w-md grayscale" />
                        </div>
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-gray-900">Gaming</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                From live events to digital platforms, we help gaming companies leverage data science and machine
                                learning to enhance player experiences, optimize game mechanics, and drive business growth. Our
                                solutions enable gaming companies to understand player behavior, personalize experiences, and maximize
                                engagement.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-gray-900">Manufacturing</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We help manufacturing companies optimize operations, improve quality control, and reduce costs through
                                advanced analytics and machine learning. From predictive maintenance to supply chain optimization, our
                                solutions enable manufacturers to achieve operational excellence and competitive advantage.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img src="/factory-production-bw.png" alt="Manufacturing" className="w-full max-w-md grayscale" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Description */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12">
                        <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto mb-8">
                            <text x="0" y="30" className="text-2xl font-serif fill-gray-900">
                                DaVinci
                            </text>
                        </svg>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Data and AI-powered strategy execution, planning and optimization for organizations looking to harness the
                        power of their data to drive innovation and achieve measurable results across all areas of the business.
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg">
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                "It was an absolute pleasure working with DaVinci Analytics; their technical expertise is as deep as it
                                is broad... In the case of complex, unstructured problems, they blazed a trail for us when there was no
                                clear path forward."
                            </p>
                            <div className="flex items-center">
                                <img src="/professional-headshot.png" alt="Charlotte Dillon" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-medium text-gray-900">CHARLOTTE</p>
                                    <p className="text-sm text-gray-600">HEAD OF DATA</p>
                                    <p className="text-sm text-gray-600">BETSSON GROUP</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg">
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                "Partnering with DaVinci Analytics has taken Reup further faster against our product vision than we could
                                have anticipated. They are the rocket fuel for innovation, and our collaboration continues to unlock new
                                data science initiatives thanks to their expertise and commitment to results."
                            </p>
                            <div className="flex items-center">
                                <img src="/professional-headshot.png" alt="Jack Appleby" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-medium text-gray-900">JACK APPLEBY</p>
                                    <p className="text-sm text-gray-600">CO-FOUNDER</p>
                                    <p className="text-sm text-gray-600">REUP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work with DaVinci */}
            <section className="py-20 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-serif mb-6 text-gray-900">
                                Work with
                                <br />
                                DaVinci.
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Find out how DaVinci can help you tackle your most challenging data science and machine learning
                                projects.
                            </p>
                            <button className="bg-[#4C6FE7] text-white px-8 py-3 font-medium hover:bg-[#3A5BD4] transition-colors duration-200">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#4C6FE7] text-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-serif mb-4">DaVinci</h3>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">SOLUTIONS</h4>
                            <ul className="space-y-2 text-sm">
                                <li>PLATFORMS</li>
                                <li>EXPERTISE</li>
                                <li>BLOG</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">ABOUT US</h4>
                            <ul className="space-y-2 text-sm">
                                <li>CAREERS</li>
                                <li>CONTACT US</li>
                                <li>PARTNERSHIPS</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm">© 2024 DaVinci ANALYTICS. A PERSONAL BLOG</p>
                            <p className="text-sm">CHICAGO, IL, USA</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
