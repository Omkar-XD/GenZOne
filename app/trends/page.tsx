"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { TrendingUp, Search, Filter, Heart, Share2, Clock, Globe, ArrowLeft, Sparkles, Eye } from "lucide-react"
import Link from "next/link"

interface TrendItem {
  id: string
  title: string
  description: string
  category: string
  region: string
  popularity: number
  timeAgo: string
  imageUrl: string
  tags: string[]
  likes: number
  views: number
}

export default function TrendsPage() {
  const [trends, setTrends] = useState<TrendItem[]>([])
  const [filteredTrends, setFilteredTrends] = useState<TrendItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)
  const [likedTrends, setLikedTrends] = useState<Set<string>>(new Set())

  const categories = ["All", "Fashion", "Food", "Culture", "Technology", "Music", "Art"]

  // Mock trend data - in a real app, this would come from your API/Firebase
  const mockTrends: TrendItem[] = [
    {
      id: "1",
      title: "Y2K Fashion Revival",
      description: "Low-rise jeans, butterfly clips, and metallic fabrics are making a major comeback among Gen Z",
      category: "Fashion",
      region: "Global",
      popularity: 95,
      timeAgo: "2 hours ago",
      imageUrl: "/y2k-fashion-revival-metallic-clothing.jpg",
      tags: ["y2k", "fashion", "nostalgia", "metallic"],
      likes: 1247,
      views: 15420,
    },
    {
      id: "2",
      title: "Cloud Bread Craze",
      description: "This fluffy, protein-packed bread alternative is taking over social media feeds worldwide",
      category: "Food",
      region: "North America",
      popularity: 88,
      timeAgo: "4 hours ago",
      imageUrl: "/cloud-bread-fluffy-white-bread.jpg",
      tags: ["food", "healthy", "viral", "baking"],
      likes: 892,
      views: 12350,
    },
    {
      id: "3",
      title: "Digital Detox Movement",
      description: "Young people are embracing screen-free time and analog activities for mental wellness",
      category: "Culture",
      region: "Europe",
      popularity: 76,
      timeAgo: "6 hours ago",
      imageUrl: "/digital-detox-books-nature-meditation.jpg",
      tags: ["wellness", "mindfulness", "lifestyle", "health"],
      likes: 654,
      views: 8920,
    },
    {
      id: "4",
      title: "AI Art Generators",
      description: "Creative tools powered by artificial intelligence are revolutionizing digital art creation",
      category: "Technology",
      region: "Global",
      popularity: 92,
      timeAgo: "8 hours ago",
      imageUrl: "/ai-generated-digital-art-colorful-abstract.jpg",
      tags: ["ai", "art", "technology", "creativity"],
      likes: 1456,
      views: 18750,
    },
    {
      id: "5",
      title: "Cottagecore Aesthetics",
      description: "Romanticizing rural life with vintage fashion, baking, and nature-inspired decor",
      category: "Culture",
      region: "Global",
      popularity: 82,
      timeAgo: "12 hours ago",
      imageUrl: "/cottagecore-aesthetic-vintage-rural-lifestyle.jpg",
      tags: ["aesthetic", "vintage", "nature", "lifestyle"],
      likes: 743,
      views: 9840,
    },
    {
      id: "6",
      title: "Sustainable Fashion",
      description: "Eco-friendly clothing brands and thrift shopping are becoming mainstream among young consumers",
      category: "Fashion",
      region: "Global",
      popularity: 79,
      timeAgo: "1 day ago",
      imageUrl: "/sustainable-fashion-clothing.png",
      tags: ["sustainability", "eco-friendly", "thrift", "conscious"],
      likes: 567,
      views: 7230,
    },
  ]

  useEffect(() => {
    // Simulate loading trends
    const loadTrends = async () => {
      setIsLoading(true)
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setTrends(mockTrends)
      setFilteredTrends(mockTrends)
      setIsLoading(false)
    }

    loadTrends()
  }, [])

  useEffect(() => {
    let filtered = trends

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((trend) => trend.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (trend) =>
          trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trend.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trend.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    setFilteredTrends(filtered)
  }, [trends, selectedCategory, searchQuery])

  const handleLike = (trendId: string) => {
    const newLikedTrends = new Set(likedTrends)
    if (likedTrends.has(trendId)) {
      newLikedTrends.delete(trendId)
    } else {
      newLikedTrends.add(trendId)
    }
    setLikedTrends(newLikedTrends)

    // Update the trend's like count
    setTrends((prevTrends) =>
      prevTrends.map((trend) =>
        trend.id === trendId
          ? { ...trend, likes: likedTrends.has(trendId) ? trend.likes - 1 : trend.likes + 1 }
          : trend,
      ),
    )
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Fashion: "bg-pink-100 text-pink-800",
      Food: "bg-orange-100 text-orange-800",
      Culture: "bg-purple-100 text-purple-800",
      Technology: "bg-blue-100 text-blue-800",
      Music: "bg-green-100 text-green-800",
      Art: "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-semibold">Trending Now</h1>
              </div>
            </div>
            <Badge variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              Live Feed
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search trends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Trends Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-muted rounded"></div>
                    <div className="h-6 w-20 bg-muted rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrends.map((trend, index) => (
                <motion.div
                  key={trend.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <img
                        src={trend.imageUrl || "/placeholder.svg"}
                        alt={trend.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(trend.category)}>{trend.category}</Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {trend.popularity}%
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg leading-tight">{trend.title}</h3>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{trend.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {trend.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{trend.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Globe className="h-4 w-4" />
                            <span>{trend.region}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{trend.timeAgo}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(trend.id)}
                            className={likedTrends.has(trend.id) ? "text-red-500" : ""}
                          >
                            <Heart className={`h-4 w-4 mr-1 ${likedTrends.has(trend.id) ? "fill-current" : ""}`} />
                            {trend.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}

        {filteredTrends.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No trends found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
