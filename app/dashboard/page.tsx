"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  TrendingUp,
  MessageCircle,
  ImageIcon,
  Heart,
  Settings,
  LogOut,
  Sparkles,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

interface UserStats {
  trendsViewed: number
  imagesGenerated: number
  chatMessages: number
  likedTrends: number
}

interface RecentActivity {
  id: string
  type: "trend" | "chat" | "image"
  title: string
  timestamp: Date
  description?: string
}

export default function DashboardPage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<UserStats>({
    trendsViewed: 0,
    imagesGenerated: 0,
    chatMessages: 0,
    likedTrends: 0,
  })
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // ✅ Wait until Firebase finishes checking auth
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (!user || loading) return

    const loadUserData = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate API call

      setStats({
        trendsViewed: 47,
        imagesGenerated: 12,
        chatMessages: 89,
        likedTrends: 23,
      })

      setRecentActivity([
        {
          id: "1",
          type: "trend",
          title: "Viewed Y2K Fashion Revival",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          description: "Fashion trend from Global",
        },
        {
          id: "2",
          type: "image",
          title: "Generated AI Art Image",
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          description: "Futuristic style image",
        },
        {
          id: "3",
          type: "chat",
          title: "AI Chat Session",
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          description: "Asked about food trends",
        },
        {
          id: "4",
          type: "trend",
          title: "Liked Cloud Bread Craze",
          timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
          description: "Food trend from North America",
        },
      ])

      setIsLoading(false)
    }

    loadUserData()
  }, [user, loading])

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "trend":
        return <TrendingUp className="h-4 w-4" />
      case "chat":
        return <MessageCircle className="h-4 w-4" />
      case "image":
        return <ImageIcon className="h-4 w-4" />
      default:
        return <Sparkles className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "trend":
        return "text-blue-600"
      case "chat":
        return "text-green-600"
      case "image":
        return "text-purple-600"
      default:
        return "text-gray-600"
    }
  }

  // ✅ Show a loader until Firebase is done
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground">Checking authentication...</p>
      </div>
    )
  }

  // If still no user after loading, don't render dashboard
  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold">GenZOne</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/trends">Explore</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/chat">AI Chat</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/generate">Generate</Link>
              </Button>

              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.photoURL || undefined} />
                  <AvatarFallback>
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {user.displayName || "Trendsetter"}!
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your trend discovery journey
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {[
              { label: "Trends Viewed", value: stats.trendsViewed, icon: <TrendingUp className="h-6 w-6 text-blue-600" />, color: "bg-blue-100" },
              { label: "Images Generated", value: stats.imagesGenerated, icon: <ImageIcon className="h-6 w-6 text-purple-600" />, color: "bg-purple-100" },
              { label: "Chat Messages", value: stats.chatMessages, icon: <MessageCircle className="h-6 w-6 text-green-600" />, color: "bg-green-100" },
              { label: "Liked Trends", value: stats.likedTrends, icon: <Heart className="h-6 w-6 text-red-600" />, color: "bg-red-100" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-2xl font-bold">
                        {isLoading ? "..." : item.value}
                      </p>
                    </div>
                    <div className={`${item.color} p-3 rounded-full`}>
                      {item.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-muted rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-4 bg-muted rounded mb-1"></div>
                              <div className="h-3 bg-muted rounded w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div
                            className={`p-2 rounded-full bg-muted ${getActivityColor(
                              activity.type
                            )}`}
                          >
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{activity.title}</p>
                            {activity.description && (
                              <p className="text-xs text-muted-foreground">
                                {activity.description}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground">
                              {activity.timestamp.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" asChild>
                    <Link href="/trends">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Explore Trends
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/chat">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      AI Chat
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/generate">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Generate Image
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Avatar>
                      <AvatarImage src={user.photoURL || undefined} />
                      <AvatarFallback>
                        {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{user.displayName || "User"}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
