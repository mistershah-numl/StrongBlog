"use client"

import { StrongNavigation } from "@/components/strong-navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const filterCategories = [
    "ALL",
    "PHARMACEUTICALS",
    "MARKETING",
    "MANUFACTURING",
    "AUTOMOTIVES",
    "TECHNOLOGY",
    "HEALTHCARE",
    "OPERATIONS",
    "AGRICULTURE",
]

const testimonials = [
    {
        id: 1,
        quote: "It was an absolute pleasure working with DaVinci Analytics; their technical expertise is as deep as it is broad… in the case of complex, unstructured problems, they blazed a trail for us where there was none.",
        author: "CHARLOTTE DANIELS",
        position: "HEAD OF DATA SCIENCE, DICTIONARY.COM",
        image: "/placeholder-user.jpg"
    },
    {
        id: 2,
        quote: "Partnering with DaVinci Analytics has taken ReUp further faster against our product vision than we could have anticipated. They are like rocket fuel for innovation, and our collaboration continues to deliver high-value data science initiatives thanks to their expertise and commitment to results.",
        author: "ZACK AVSHALOMOV",
        position: "HEAD OF PRODUCT, REUP EDUCATION",
        image: "/placeholder-user.jpg"
    },
    {
        id: 3,
        quote: "DaVinci Analytics delivered exceptional results that exceeded our expectations. Their deep understanding of machine learning and data science helped us transform our business processes completely.",
        author: "SARAH JOHNSON",
        position: "CTO, TECH INNOVATIONS",
        image: "/placeholder-user.jpg"
    },
    {
        id: 4,
        quote: "Working with DaVinci Analytics was a game changer for our organization. Their expertise in AI and machine learning solutions helped us achieve breakthrough results in record time.",
        author: "MICHAEL CHEN",
        position: "VP OF ENGINEERING, DATA CORP",
        image: "/placeholder-user.jpg"
    }
]

const caseStudies = [
    {
        id: 1,
        title: "Increasing provider engagement with artificial intelligence",
        categories: ["PHARMACEUTICALS", "MARKETING"],
        image: "/placeholder.svg",
        description: "We worked with a top 5 global pharmaceutical company to build a multi-channel promotional outreach engine across strategic brand portfolios.",
        link: "/blog/increasing-provider-engagement-with-artificial-intelligence"
    },
    {
        id: 2,
        title: "Real-time food inspection using deep learning",
        categories: ["MANUFACTURING"],
        image: "/placeholder.svg",
        description: "We worked to automate the inspection process for a grower-owned prune cooperative using computer vision and deep learning.",
        link: "/blog/real-time-food-inspection-using-deep-learning"
    },
    {
        id: 3,
        title: "Optimizing ad pricing at Dictionary.com",
        categories: ["MARKETING"],
        image: "/placeholder.svg",
        description: "We leveraged machine learning to optimize ad pricing using impression and bid-level data for Dictionary.com.",
        link: "/blog/ad-floor-optimization"
    },
    {
        id: 4,
        title: "Building the transport vehicle of tomorrow",
        categories: ["AUTOMOTIVES", "TECHNOLOGY"],
        image: "/placeholder.svg",
        description: "We partnered with a global top-5 automotive company to shape the future of commercial transportation with computer vision and artificial intelligence.",
        link: "/blog/embedded-machine-learning-automotives"
    },
    {
        id: 5,
        title: "Reinforcement learning for personalized medication dosing",
        categories: ["HEALTHCARE"],
        image: "/placeholder.svg",
        description: "We used DaVinci RL and two new simulation environments to train and validate RL approaches to dosing problems.",
        link: "/blog/reinforcement-learning-for-personalized-medication-dosing"
    },
    {
        id: 6,
        title: "Forecasting public transport utilization in Chicago",
        categories: ["OPERATIONS"],
        image: "/placeholder.svg",
        description: "We built a forecasting tool to accurately predict daily ridership for the Chicago Transit Authority to help optimize CTA operational logistics.",
        link: "/blog/forecasting-public-transport-utilization-in-chicago"
    },
    {
        id: 7,
        title: "One-to-one multichannel marketing optimization",
        categories: ["MARKETING"],
        image: "/placeholder.svg",
        description: "In collaboration with a leader in casino gaming, we developed a one-to-one marketing engine for their customers to personalize promotions.",
        link: "/blog/one-to-one-marketing-optimization"
    },
    {
        id: 8,
        title: "Keeping children safe online with machine learning",
        categories: ["TECHNOLOGY"],
        image: "/placeholder.svg",
        description: "We leveraged machine learning and natural language processing to identify abusive content that children were being exposed to online.",
        link: "/blog/keeping-kids-safe-nlp-machine-learning"
    },
    {
        id: 9,
        title: "Optimizing restaurant inventory using demand forecasting",
        categories: ["OPERATIONS"],
        image: "/placeholder.svg",
        description: "We built a solution to help restaurant operators create optimal ordering plans with detailed inventory management, forecasting, and visualization.",
        link: "/blog/optimizing-restaurant-inventory-using-ingredient-level-demand-forecasting"
    },
    {
        id: 10,
        title: "Improving visual crop detection algorithm",
        categories: ["AGRICULTURE"],
        image: "/placeholder.svg",
        description: "We partnered with a leading firm in the agricultural sector to enhance their crop object detection model.",
        link: "/blog/case-study-improving-visual-crop-detection-algorithm"
    },
    {
        id: 11,
        title: "Optimizing ingredients based on geographic demand",
        categories: ["OPERATIONS"],
        image: "/placeholder.svg",
        description: "We worked with a leading partner in foodservice innovation to improve their understanding of how product sales for certain ingredients differ by geographic market.",
        link: "/blog/case-study-optimizing-ingredients-based-on-geographic-demand"
    },
    {
        id: 12,
        title: "Optimizing personalized marketing campaigns at scale",
        categories: ["MARKETING", "TECHNOLOGY"],
        image: "/placeholder.svg",
        description: "We worked with a consumer-facing real estate business to build a production-grade marketing platform that could facilitate personalized marketing campaigns at scale.",
        link: "/blog/case-study-optimizing-personalized-marketing-campaigns-at-scale"
    },
    {
        id: 13,
        title: "Improving marketing effectiveness through MTA",
        categories: ["MARKETING", "PHARMACEUTICALS"],
        image: "/placeholder.svg",
        description: "We worked with a biopharmaceutical company that was looking to answer questions related to multi-touch attribution.",
        link: "/blog/case-study-using-mta-to-improve-marketing-effectiveness"
    },
]

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState("ALL")
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

    const filteredCaseStudies =
        activeFilter === "ALL" ? caseStudies : caseStudies.filter((study) => study.categories.includes(activeFilter))

    const nextTestimonials = () => {
        setCurrentTestimonialIndex((prev) =>
            prev + 2 >= testimonials.length ? 0 : prev + 2
        )
    }

    const prevTestimonials = () => {
        setCurrentTestimonialIndex((prev) =>
            prev === 0 ? Math.max(0, testimonials.length - 2) : prev - 2
        )
    }

    const getCurrentTestimonials = () => {
        return testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 2)
    }

    return (
        <div className="min-h-screen bg-white">
            <StrongNavigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8">Work</h1>
                    <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        We help companies leverage AI and machine learning to improve business outcomes.
                    </p>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">Case Studies</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Interested in learning more about the type of work we do? Check out some of our case studies.
                        </p>
                    </div>

                    {/* Filter Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {filterCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`text-xs font-medium px-4 py-2 border transition-all duration-200 uppercase tracking-wider ${activeFilter === category
                                    ? "bg-gray-900 text-white border-gray-900"
                                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Case Studies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {filteredCaseStudies.map((study) => (
                            <Link key={study.id} href={study.link} className="group">
                                <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 overflow-hidden">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <div className="flex flex-wrap gap-2">
                                                {study.categories.map((category) => (
                                                    <span
                                                        key={category}
                                                        className="text-xs font-medium text-white bg-black/30 px-2 py-1 uppercase tracking-wider backdrop-blur-sm"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                                            {study.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {study.description}
                                        </p>
                                        <div className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                                            READ MORE
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonials}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-300 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
                            disabled={currentTestimonialIndex === 0}
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        <button
                            onClick={nextTestimonials}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-300 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
                            disabled={currentTestimonialIndex + 2 >= testimonials.length}
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Testimonials Container */}
                        <div className="mx-16">
                            <div className="flex gap-8">
                                {getCurrentTestimonials().map((testimonial, index) => (
                                    <>
                                        {/* Testimonial Card */}
                                        <div key={testimonial.id} className="flex-1 text-center">
                                            <blockquote className="text-xl sm:text-2xl font-light text-gray-900 mb-8 leading-relaxed italic">
                                                "{testimonial.quote}"
                                            </blockquote>
                                            <div className="flex items-center justify-center gap-4">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-full"
                                                />
                                                <div className="text-left">
                                                    <div className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                                                        {testimonial.author}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {testimonial.position}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Divider (only show between testimonials, not after the last one) */}
                                        {index === 0 && getCurrentTestimonials().length === 2 && (
                                            <div className="flex-shrink-0 w-px bg-gray-300 mx-4"></div>
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonialIndex(index * 2)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${Math.floor(currentTestimonialIndex / 2) === index
                                        ? "bg-gray-900"
                                        : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Work with DaVinci Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                        Work with<br />DaVinci.
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Find out how DaVinci can help you tackle your most challenging data science and machine learning projects.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase">
                        GET IN TOUCH
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-white py-16" style={{ backgroundColor: '#4C6FE7' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <div className="text-2xl font-light mb-8">DaVinci</div>
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
                                © 2025 DaVinci ANALYTICS, A ONESIX COMPANY
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
