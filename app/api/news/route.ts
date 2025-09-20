import { NextResponse } from "next/server"

// ✅ Correct way to define Next.js App Router API Route
export async function GET() {
  try {
    const apiKey = process.env.GNEWS_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API key not configured",
          articles: [],
        },
        { status: 500 }
      )
    }

    // ✅ Using native fetch with caching correctly
    const response = await fetch(
      `https://gnews.io/api/v4/search?q="Gen Z" OR "generation z" OR "tiktok" OR "social media trends" OR "youth culture" OR "teen trends"&lang=en&country=us&max=8&apikey=${apiKey}`,
      {
        // ⚡ Next.js App Router caching
        next: { revalidate: 3600 },
        // ✅ Good practice: add a User-Agent header to avoid 403
        headers: {
          "User-Agent": "GenZOne/1.0 (https://genzone.example)",
        },
      }
    )

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // ✅ Safely map articles
    const filteredArticles =
      data.articles?.map((article: any) => ({
        title: article.title || "Untitled",
        description: article.description || "No description available",
        url: article.url || "#",
        urlToImage: article.image || null,
        publishedAt: article.publishedAt || new Date().toISOString(),
        category: determineCategory(
          `${article.title || ""} ${article.description || ""}`
        ),
        // ✅ Always provide a fallback for source
        source: {
          name: article.source?.name || "Unknown Source",
        },
      })) || []

    return NextResponse.json({
      articles: filteredArticles,
      totalResults: data.totalArticles || filteredArticles.length,
    })
  } catch (error) {
    console.error("News API Error:", error)

    // ✅ Fallback data in case API fails
    return NextResponse.json({
      articles: [
        {
          title: "TikTok's New AI Filter Creates Virtual Fashion Shows",
          category: "Tech",
          publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          description:
            "Gen Z creators are using AI to showcase sustainable fashion in virtual runways",
          url: "#",
          urlToImage: null,
          source: { name: "GenZOne" },
        },
        {
          title: "Cottagecore Meets Cyberpunk: The New Aesthetic Trend",
          category: "Culture",
          publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
          description:
            "Young artists blend rural nostalgia with futuristic elements in viral content",
          url: "#",
          urlToImage: null,
          source: { name: "GenZOne" },
        },
        {
          title: "Plant-Based Bubble Tea Takes Over College Campuses",
          category: "Food",
          publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
          description:
            "Sustainable boba alternatives gain popularity among environmentally conscious students",
          url: "#",
          urlToImage: null,
          source: { name: "GenZOne" },
        },
        {
          title: "Gen Z Revives 90s Rave Fashion with Modern Twist",
          category: "Fashion",
          publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
          description:
            "Neon colors and holographic materials dominate youth fashion weeks globally",
          url: "#",
          urlToImage: null,
          source: { name: "GenZOne" },
        },
      ],
      totalResults: 4,
    })
  }
}

// ✅ Simple category classifier
function determineCategory(text: string): string {
  const lowerText = text.toLowerCase()

  if (
    lowerText.includes("fashion") ||
    lowerText.includes("clothing") ||
    lowerText.includes("style")
  ) {
    return "Fashion"
  } else if (
    lowerText.includes("food") ||
    lowerText.includes("recipe") ||
    lowerText.includes("cooking")
  ) {
    return "Food"
  } else if (
    lowerText.includes("tech") ||
    lowerText.includes("ai") ||
    lowerText.includes("app") ||
    lowerText.includes("digital")
  ) {
    return "Tech"
  } else {
    return "Culture"
  }
}
