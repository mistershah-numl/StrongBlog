import { StrongNavigation } from "@/components/strong-navigation"
import { CircularPattern } from "@/components/circular-pattern"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-white">
            <StrongNavigation />

            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#4C6FE7" }}>
                <div className="relative z-10 flex items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-canela font-light leading-tight mb-8">
                            Solutions &<br />
                            Industries
                        </h1>
                        <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-lg font-karla">
                            We have helped organizations across a wide range of industries leverage data science, machine learning,
                            and artificial intelligence to solve complex business challenges and drive growth.
                        </p>
                    </div>
                </div>
                <CircularPattern />
            </section>

            {/* Industry Navigation */}
            <section className="bg-white py-8 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-sm font-medium text-gray-600 font-atc-harris">
                        <a href="#technology" className="hover:text-[#4C6FE7] transition-colors">
                            TECHNOLOGY & SOFTWARE
                        </a>
                        <a href="#sports" className="hover:text-[#4C6FE7] transition-colors">
                            SPORTS
                        </a>
                        <a href="#automotives" className="hover:text-[#4C6FE7] transition-colors">
                            AUTOMOTIVES
                        </a>
                        <a href="#marketing" className="hover:text-[#4C6FE7] transition-colors">
                            MARKETING / AD-OPS
                        </a>
                        <a href="#gaming" className="hover:text-[#4C6FE7] transition-colors">
                            GAMING
                        </a>
                        <a href="#manufacturing" className="hover:text-[#4C6FE7] transition-colors">
                            MANUFACTURING
                        </a>
                        <a href="#healthcare" className="hover:text-[#4C6FE7] transition-colors">
                            HEALTHCARE & PHARMA
                        </a>
                    </div>
                </div>
            </section>

            {/* Technology & Software */}
            <section id="technology" className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">
                                Technology &<br />
                                Software
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                Our experience and deep-rooted technical expertise enables us to navigate the complex technology
                                landscape. We help technology companies leverage data science and machine learning to optimize their
                                products, improve user experiences, and drive innovation.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                        <div className="order-first lg:order-last">
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Technology and Software"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports */}
            <section id="sports" className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">Sports</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                We bring expertise in advanced analytics to sports, from optimizing athlete performance to enhancing fan
                                engagement. Our solutions help sports organizations make data-driven decisions to gain competitive
                                advantages in their respective fields.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                        <div>
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Sports Analytics"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Automotives */}
            <section id="automotives" className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-last lg:order-first">
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Automotive Industry"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">Automotives</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                We help automotive companies harness the power of data to optimize manufacturing processes, improve
                                supply chain efficiency, enhance customer experiences, and accelerate the development of autonomous
                                vehicles and smart mobility solutions.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing / Ad-Ops */}
            <section id="marketing" className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">
                                Marketing / Ad-
                                <br />
                                Ops
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                Our expertise spans across all facets of digital marketing and advertising operations. We help companies
                                optimize their marketing spend, improve targeting accuracy, enhance customer segmentation, and maximize
                                ROI through advanced analytics and machine learning.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                        <div>
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Marketing and Ad Operations"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gaming */}
            <section id="gaming" className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-last lg:order-first">
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Gaming Industry"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">Gaming</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                From player behavior analysis to game optimization, we help gaming companies leverage data science to
                                enhance player experiences, improve retention rates, optimize monetization strategies, and develop more
                                engaging gaming experiences.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing */}
            <section id="manufacturing" className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">Manufacturing</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                We help manufacturing companies optimize production processes, predict equipment failures, improve
                                quality control, and enhance supply chain efficiency through advanced analytics, IoT integration, and
                                predictive maintenance solutions.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                        <div>
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Manufacturing Industry"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Healthcare & Pharma */}
            <section id="healthcare" className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-last lg:order-first">
                            <Image
                                src="/placeholder-503oh.png"
                                alt="Healthcare and Pharma"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg grayscale"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-light text-gray-900">
                                Healthcare &<br />
                                Pharma
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                Data and AI-driven solutions transform healthcare, improving patient outcomes, accelerating drug
                                discovery, optimizing clinical trials, and enhancing operational efficiency while maintaining the
                                highest standards of privacy and compliance.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#1D2838] hover:border-white border-2 border-transparent text-white px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase transition-all duration-200">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm">
                            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-karla">
                                "It was an absolute pleasure working with Strong Analytics; their technical expertise is as deep as it
                                is broad... In the case of complex, unstructured problems, they blazed a trail for us where there was
                                none."
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/professional-headshot.png"
                                    alt="Charlotte Yarkoni"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div>
                                    <div className="font-medium text-gray-900 font-atc-harris">CHARLOTTE YARKONI</div>
                                    <div className="text-sm text-gray-600 font-karla">HEAD OF DATA</div>
                                    <div className="text-sm text-gray-600 font-karla">BETSSON GROUP</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm">
                            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-karla">
                                "Partnering with Strong Analytics has taken Reup further faster against our product vision than we could
                                have anticipated. They are the rocket fuel for innovation, and our collaboration continues to deliver
                                high-value data science initiatives thanks to their expertise and commitment to results."
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/professional-headshot.png"
                                    alt="Jack Appleby"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div>
                                    <div className="font-medium text-gray-900 font-atc-harris">JACK APPLEBY</div>
                                    <div className="text-sm text-gray-600 font-karla">CO-FOUNDER</div>
                                    <div className="text-sm text-gray-600 font-karla">REUP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work with Strong */}
            <section className="py-20 lg:py-32 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-canela font-light text-gray-900 mb-8">
                                Work with
                                <br />
                                Strong.
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed font-karla">
                                Find out how Strong can help you tackle your most challenging data science and machine learning
                                projects.
                            </p>
                            <Button className="bg-[#4C6FE7] hover:bg-[#F9FAFB] hover:text-black hover:border-[#4C6FE7] border-2 border-transparent px-8 py-3 text-sm font-atc-harris font-medium tracking-wide uppercase text-white transition-all duration-200">
                                GET IN TOUCH
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#4C6FE7] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-canela font-light mb-6">Strong</div>
                            <div className="space-y-2 text-sm font-atc-harris">
                                <div>OUR STORY</div>
                                <div>PLATFORMS</div>
                                <div>EXPERTISE</div>
                                <div>BLOG</div>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm font-atc-harris">
                            <div>ABOUT US</div>
                            <div>CAREERS</div>
                            <div>CONTACT US</div>
                            <div>PARTNERSHIPS</div>
                        </div>
                        <div className="space-y-2 text-sm font-karla">
                            <div>© 2023, STRONG ANALYTICS. A ONESIX COMPANY</div>
                            <div>CHICAGO, IL, USA</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
