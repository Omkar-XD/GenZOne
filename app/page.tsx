"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  Sparkles,
  TrendingUp,
  Zap,
  Globe,
  MessageCircle,
  ImageIcon,
  Stars,
  Flame,
  Clock,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const trendingTopics = [
    {
      category: "Fashion",
      title: "Y2K Revival",
      color: "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-lg",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      category: "Food",
      title: "Cloud Bread",
      color: "bg-gradient-to-r from-blue-400 to-cyan-400 text-white border-0 shadow-lg",
      icon: <Stars className="h-4 w-4" />,
    },
    {
      category: "Culture",
      title: "Digital Detox",
      color: "bg-gradient-to-r from-green-400 to-emerald-400 text-white border-0 shadow-lg",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      category: "Tech",
      title: "AI Art",
      color: "bg-gradient-to-r from-orange-400 to-red-400 text-white border-0 shadow-lg",
      icon: <Flame className="h-4 w-4" />,
    },
    {
      category: "Fashion",
      title: "Sustainable Streetwear",
      color: "bg-gradient-to-r from-teal-400 to-cyan-500 text-white border-0 shadow-lg",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      category: "Food",
      title: "Viral TikTok Recipes",
      color: "bg-gradient-to-r from-pink-400 to-rose-400 text-white border-0 shadow-lg",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      category: "Culture",
      title: "Mental Health Awareness",
      color: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 shadow-lg",
      icon: <Stars className="h-4 w-4" />,
    },
    {
      category: "Tech",
      title: "NFT Gaming",
      color: "bg-gradient-to-r from-violet-400 to-purple-500 text-white border-0 shadow-lg",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      category: "Fashion",
      title: "Gender-Neutral Clothing",
      color: "bg-gradient-to-r from-indigo-400 to-blue-500 text-white border-0 shadow-lg",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      category: "Food",
      title: "Plant-Based Alternatives",
      color: "bg-gradient-to-r from-lime-400 to-green-500 text-white border-0 shadow-lg",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      category: "Culture",
      title: "Micro-Influencer Movement",
      color: "bg-gradient-to-r from-rose-400 to-pink-500 text-white border-0 shadow-lg",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      category: "Tech",
      title: "AR Shopping",
      color: "bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg",
      icon: <Flame className="h-4 w-4" />,
    },
    {
      category: "Fashion",
      title: "Thrift Flipping",
      color: "bg-gradient-to-r from-teal-400 to-cyan-500 text-white border-0 shadow-lg",
      icon: <Stars className="h-4 w-4" />,
    },
    {
      category: "Culture",
      title: "Authenticity Over Perfection",
      color: "bg-gradient-to-r from-slate-400 to-gray-500 text-white border-0 shadow-lg",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      category: "Tech",
      title: "AI Companions",
      color: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0 shadow-lg",
      icon: <MessageCircle className="h-4 w-4" />,
    },
    {
      category: "Fashion",
      title: "Climate-Adaptive Wear",
      color: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-lg",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      category: "Food",
      title: "Lab-Grown Meat",
      color: "bg-gradient-to-r from-red-400 to-pink-500 text-white border-0 shadow-lg",
      icon: <Stars className="h-4 w-4" />,
    },
    {
      category: "Culture",
      title: "Digital Nomad Villages",
      color: "bg-gradient-to-r from-orange-400 to-yellow-500 text-white border-0 shadow-lg",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      category: "Tech",
      title: "Brain-Computer Interfaces",
      color: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 shadow-lg",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      category: "Fashion",
      title: "Smart Fabric Technology",
      color: "bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0 shadow-lg",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      category: "Food",
      title: "Personalized Nutrition AI",
      color: "bg-gradient-to-r from-lime-500 to-green-600 text-white border-0 shadow-lg",
      icon: <Flame className="h-4 w-4" />,
    },
    {
      category: "Culture",
      title: "Virtual Reality Socializing",
      color: "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0 shadow-lg",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      category: "Tech",
      title: "Quantum Computing Apps",
      color: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-lg",
      icon: <Stars className="h-4 w-4" />,
    },
    {
      category: "Fashion",
      title: "3D Printed Accessories",
      color: "bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 shadow-lg",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ]

  const [genZNews, setGenZNews] = useState([])
  const [newsLoading, setNewsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news")
        const data = await response.json()
        setGenZNews(data.articles || [])
      } catch (error) {
        console.error("Failed to fetch news:", error)
        setGenZNews([
          {
            title: "TikTok's New AI Filter Creates Virtual Fashion Shows",
            category: "Tech",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            description: "Gen Z creators are using AI to showcase sustainable fashion in virtual runways",
            url: "#",
            urlToImage: null,
          },
          {
            title: "Cottagecore Meets Cyberpunk: The New Aesthetic Trend",
            category: "Culture",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
            description: "Young artists blend rural nostalgia with futuristic elements in viral content",
            url: "#",
            urlToImage: null,
          },
          {
            title: "Plant-Based Bubble Tea Takes Over College Campuses",
            category: "Food",
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
            description: "Sustainable boba alternatives gain popularity among environmentally conscious students",
            url: "#",
            urlToImage: null,
          },
          {
            title: "Gen Z Revives 90s Rave Fashion with Modern Twist",
            category: "Fashion",
            publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
            description: "Neon colors and holographic materials dominate youth fashion weeks globally",
            url: "#",
            urlToImage: null,
          },
        ])
      } finally {
        setNewsLoading(false)
      }
    }

    fetchNews()
    const interval = setInterval(fetchNews, 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Chat Assistant",
      description: "Get personalized trend recommendations and insights powered by advanced AI",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Image Generation",
      description: "Create stunning visuals based on the latest trends and your creative ideas",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Trends",
      description: "Discover what's trending worldwide in fashion, food, culture, and more",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Updates",
      description: "Stay ahead with instant notifications about emerging trends",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-bounce-fun shadow-2xl"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 transform rotate-45 animate-wiggle-fun shadow-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-cartoon-float shadow-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 transform rotate-12 animate-jelly shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-32 bg-gradient-to-t from-purple-400 to-pink-500 rounded-full animate-wiggle-fun shadow-2xl"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-cartoon-float shadow-lg`}
            style={{
              background: `linear-gradient(45deg, ${["#ff6b6b", "#4ecdc4", "#ffd93d", "#a8e6cf", "#ff8b94"][i % 5]}, ${["#ff8b94", "#ff6b6b", "#4ecdc4", "#ffd93d", "#a8e6cf"][i % 5]})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,107,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(78,205,196,0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-glow"></div>
      </div>

      <nav className="border-b border-border/20 bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce shadow-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                  GenZ
                </span>
                <span className="text-lg font-bold text-orange-500 -mt-2 tracking-wider">One</span>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="/trends"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium text-sm lg:text-base"
              >
                Explore Trends
              </Link>
              <Link
                href="/generate"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium text-sm lg:text-base"
              >
                AI Generator
              </Link>
              <Link
                href="/chat"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium text-sm lg:text-base"
              >
                AI Chat
              </Link>
              <Link
                href="/news"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium text-sm lg:text-base"
              >
                Latest News
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium text-sm lg:text-base"
              >
                Dashboard
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="px-4 lg:px-6 py-2 border-2 border-pink-400 text-pink-600 hover:bg-pink-50 rounded-xl font-medium shadow-lg text-sm lg:text-base bg-transparent"
                asChild
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 lg:px-6 py-2 rounded-xl font-medium shadow-lg text-sm lg:text-base"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                  <div className="w-4 h-0.5 bg-current rounded-full"></div>
                  <div className="w-4 h-0.5 bg-current rounded-full"></div>
                  <div className="w-4 h-0.5 bg-current rounded-full"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 animate-gradient"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/genz-group.png')",
            filter: "brightness(1.5) contrast(1.2) saturate(1.6)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-yellow-50/60 to-pink-50/40"></div>

        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-bounce-fun shadow-2xl opacity-80"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-32 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-br from-pink-300 to-rose-400 transform rotate-45 animate-wiggle-fun shadow-2xl opacity-80"></div>
        <div className="absolute bottom-32 sm:bottom-60 left-1/4 w-20 sm:w-28 lg:w-36 h-20 sm:h-28 lg:h-36 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full animate-cartoon-float shadow-2xl opacity-70"></div>
        <div className="absolute bottom-16 sm:bottom-32 right-1/3 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-green-300 to-emerald-400 transform rotate-12 animate-jelly shadow-2xl opacity-80"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge
                  variant="secondary"
                  className="mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-lg lg:text-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-2xl backdrop-blur-sm rounded-2xl animate-bounce-fun"
                >
                  <TrendingUp className="h-4 w-4 sm:h-5 w-5 lg:h-6 w-6 mr-2 sm:mr-3" />
                  AI-Powered Trend Discovery
                </Badge>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10 text-balance drop-shadow-2xl leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Discover What's{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-wiggle-fun inline-block">
                  Trending
                </span>{" "}
                Before Everyone Else
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-2xl text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto text-pretty leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 sm:border-4 border-yellow-300/50 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Stay ahead of the curve with AI-powered insights into global trends in fashion, food, culture, and
                technology. Built for Gen Z and the next generation of trendsetters.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg rounded-2xl font-bold animate-jelly text-white"
                  asChild
                >
                  <Link href="/trends">Explore Trends</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 border-4 border-blue-400 hover:bg-blue-100 transform hover:scale-110 transition-all duration-300 bg-white/90 rounded-2xl font-bold shadow-2xl text-blue-600 hover:text-blue-700"
                  asChild
                >
                  <Link href="/generate">Try AI Generator</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Latest Gen Z News</h2>
            <p className="text-gray-600 text-lg sm:text-xl">Updated automatically 24/7 with trending Gen Z content</p>
          </motion.div>

          {newsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, i) => (
                <Card
                  key={i}
                  className="animate-pulse bg-white/80 backdrop-blur-sm border-2 border-yellow-200/50 rounded-2xl shadow-xl"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {genZNews.slice(0, 8).map((news, index) => (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 border-2 border-yellow-200/50 hover:border-pink-300/50 bg-white/90 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-pink-50/80 group-hover:to-purple-50/80 h-full overflow-hidden rounded-2xl shadow-xl">
                    {news.urlToImage && (
                      <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-2xl">
                        <img
                          src={news.urlToImage || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = "none"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                      </div>
                    )}
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <Badge className="bg-gradient-to-r from-pink-400 to-purple-500 text-white border-0 shadow-lg rounded-xl px-2 sm:px-3 py-1 text-xs sm:text-sm">
                          {news.category || "Gen Z"}
                        </Badge>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                          <Clock className="h-3 w-3 sm:h-4 w-4" />
                          {news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : "Today"}
                          {news.trending && (
                            <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0 text-xs rounded-xl px-1 sm:px-2 py-1">
                              <Flame className="h-2 w-2 sm:h-3 w-3 mr-1" />
                              Live
                            </Badge>
                          )}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2 text-gray-800">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">{news.description}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-pink-500 hover:text-purple-600 text-sm"
                        asChild
                      >
                        <Link href={news.url} target="_blank">
                          Read more <ExternalLink className="h-3 w-3 sm:h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              What's Trending Right Now
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl">Real-time insights from around the globe</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -15, scale: 1.05, rotate: 2 }}
                className="group"
              >
                <Link href="/trends">
                  <Card className="hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 border-2 border-yellow-200/50 hover:border-pink-300/50 bg-white/90 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-pink-50/80 group-hover:to-purple-50/80 h-full rounded-3xl overflow-hidden animate-pop-in shadow-xl">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <Badge
                          className={`${topic.color} flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded-2xl`}
                        >
                          {topic.icon}
                          {topic.category}
                        </Badge>
                        <div className="w-2 h-2 sm:w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce-fun shadow-lg"></div>
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors duration-300 text-gray-800">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Trending in {topic.category.toLowerCase()} worldwide
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-yellow-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Powered by Advanced AI
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with real-time data to bring you the most relevant and
              up-to-date trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  className={`bg-gradient-to-br ${feature.color} rounded-3xl w-20 h-20 sm:w-24 h-24 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:shadow-2xl transition-all duration-300 shadow-xl animate-jelly`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>
                <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 group-hover:text-pink-600 transition-colors duration-300 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Stay Ahead of the Trends?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of trendsetters already using GenZOne
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-white text-pink-600 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg rounded-2xl font-bold"
              asChild
            >
              <Link href="/signup">Get Started for Free</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="h-6 w-6 sm:h-8 w-8 text-pink-500" />
                <span className="font-bold text-xl sm:text-2xl text-gray-800">GenZOne</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md text-sm sm:text-base">
                Discover what's trending before everyone else. AI-powered insights for the next generation of
                trendsetters.
              </p>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.949.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.013-3.667-.07-4.849-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/trends"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm sm:text-base"
                  >
                    Explore Trends
                  </Link>
                </li>
                <li>
                  <Link
                    href="/generate"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm sm:text-base"
                  >
                    AI Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chat"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm sm:text-base"
                  >
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm sm:text-base"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm sm:text-base"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-4 text-gray-800">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                © 2025 GenZOne. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <Link href="/privacy" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Terms
                </Link>
                <Link href="/cookies" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
