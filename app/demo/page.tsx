"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Sparkles, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

  const demoOptions = [
    {
      id: "fashion",
      title: "Fashion Trends",
      description: "Discover the latest in streetwear, accessories, and style",
      color: "bg-pink-100 text-pink-800",
      preview: "What's trending in fashion right now?",
    },
    {
      id: "food",
      title: "Food Culture",
      description: "Explore viral recipes, restaurant trends, and food culture",
      color: "bg-orange-100 text-orange-800",
      preview: "Show me the latest food trends",
    },
    {
      id: "culture",
      title: "Pop Culture",
      description: "Stay updated on music, entertainment, and social trends",
      color: "bg-purple-100 text-purple-800",
      preview: "What's popular in Gen Z culture?",
    },
    {
      id: "tech",
      title: "Technology",
      description: "Learn about emerging tech, apps, and digital trends",
      color: "bg-blue-100 text-blue-800",
      preview: "Tell me about emerging tech trends",
    },
  ]

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
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-semibold">Try AI Chat Demo</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Experience AI-Powered Trend Discovery</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose a category below to see how our AI assistant can help you discover the latest trends and insights.
            </p>
          </motion.div>

          {/* Demo Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {demoOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedDemo === option.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedDemo(option.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <Badge className={option.color}>Trending</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground">Example: "{option.preview}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Start Chatting?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Jump into our AI chat and start discovering trends that matter to you.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/chat">
                    Start AI Chat
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8">What You Can Do With Our AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Ask Questions</h4>
                  <p className="text-sm text-muted-foreground">Get instant answers about any trend topic</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Get Insights</h4>
                  <p className="text-sm text-muted-foreground">Receive personalized trend recommendations</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Stay Updated</h4>
                  <p className="text-sm text-muted-foreground">Learn about emerging trends before they go viral</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
