"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Sparkles, Download, Share2, ArrowLeft, Wand2, Palette, Camera } from "lucide-react"
import Link from "next/link"

interface GeneratedImage {
  id: string
  prompt: string
  imageUrl: string
  style: string
  timestamp: Date
}

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("realistic")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([])
  const [currentImage, setCurrentImage] = useState<GeneratedImage | null>(null)

  const styles = [
    { id: "realistic", name: "Realistic", description: "Photo-realistic images" },
    { id: "artistic", name: "Artistic", description: "Creative and stylized" },
    { id: "minimalist", name: "Minimalist", description: "Clean and simple" },
    { id: "vintage", name: "Vintage", description: "Retro and nostalgic" },
    { id: "futuristic", name: "Futuristic", description: "Modern and sci-fi" },
    { id: "abstract", name: "Abstract", description: "Creative and conceptual" },
  ]

  const trendPrompts = [
    "Y2K fashion model wearing metallic clothing",
    "Cottagecore aesthetic with vintage elements",
    "Sustainable fashion made from eco-friendly materials",
    "Digital art inspired by AI technology",
    "Cloud bread on a minimalist kitchen counter",
    "Gen Z lifestyle with modern technology",
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    try {
      // Simulate image generation - in a real app, this would call an AI image generation API
      await new Promise((resolve) => setTimeout(resolve, 3000))

      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        prompt: prompt,
        imageUrl: `/placeholder.svg?height=512&width=512&text=${encodeURIComponent(prompt)}`,
        style: selectedStyle,
        timestamp: new Date(),
      }

      setGeneratedImages((prev) => [newImage, ...prev])
      setCurrentImage(newImage)
      setPrompt("")
    } catch (error) {
      console.error("Error generating image:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = (image: GeneratedImage) => {
    // In a real app, this would download the actual image
    const link = document.createElement("a")
    link.href = image.imageUrl
    link.download = `trendspot-${image.id}.png`
    link.click()
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
                <ImageIcon className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-semibold">AI Image Generator</h1>
              </div>
            </div>
            <Badge variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generation Panel */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Wand2 className="h-5 w-5" />
                      <span>Create Your Image</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Describe what you want to create</label>
                      <Textarea
                        placeholder="A trendy Gen Z outfit with Y2K elements, metallic accessories, and vibrant colors..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">Choose a style</label>
                      <div className="grid grid-cols-2 gap-3">
                        {styles.map((style) => (
                          <Button
                            key={style.id}
                            variant={selectedStyle === style.id ? "default" : "outline"}
                            className="h-auto p-3 flex flex-col items-start"
                            onClick={() => setSelectedStyle(style.id)}
                          >
                            <span className="font-medium">{style.name}</span>
                            <span className="text-xs text-muted-foreground">{style.description}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className="w-full"
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Generate Image
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trending Prompts */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Palette className="h-5 w-5" />
                      <span>Trending Prompts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {trendPrompts.map((trendPrompt, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left h-auto p-3"
                          onClick={() => setPrompt(trendPrompt)}
                        >
                          <Camera className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{trendPrompt}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Preview Panel */}
            <div className="space-y-6">
              {/* Current Generation */}
              {(currentImage || isGenerating) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Generated Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isGenerating ? (
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                            <p className="text-sm text-muted-foreground">Creating your image...</p>
                          </div>
                        </div>
                      ) : (
                        currentImage && (
                          <div className="space-y-4">
                            <img
                              src={currentImage.imageUrl || "/placeholder.svg"}
                              alt={currentImage.prompt}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                            <div className="space-y-2">
                              <p className="text-sm font-medium">Prompt:</p>
                              <p className="text-sm text-muted-foreground">{currentImage.prompt}</p>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{currentImage.style}</Badge>
                                <Badge variant="outline">{currentImage.timestamp.toLocaleTimeString()}</Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button onClick={() => handleDownload(currentImage)} variant="outline" className="flex-1">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        )
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Generation History */}
              {generatedImages.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Generations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {generatedImages.slice(0, 6).map((image) => (
                          <div key={image.id} className="cursor-pointer group" onClick={() => setCurrentImage(image)}>
                            <img
                              src={image.imageUrl || "/placeholder.svg"}
                              alt={image.prompt}
                              className="w-full aspect-square object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                            />
                            <p className="text-xs text-muted-foreground mt-1 truncate">{image.prompt}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Getting Started */}
              {generatedImages.length === 0 && !isGenerating && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Card>
                    <CardContent className="p-8 text-center">
                      <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Create Your First Image</h3>
                      <p className="text-muted-foreground mb-4">
                        Describe what you want to create and our AI will generate a unique image for you.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Try using trending prompts or create your own unique descriptions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
