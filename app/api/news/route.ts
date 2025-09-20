import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.GNEWS_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API key not configured",
          articles: [],
        },
        { status: 500 },
      )
    }

    // Fetch Gen Z related news from gnews.io
    const response = await fetch(
      `https://gnews.io/api/v4/search?q="Gen Z" OR "generation z" OR "tiktok" OR "social media trends" OR "youth culture" OR "teen trends"&lang=en&country=us&max=8&apikey=${apiKey}`,
      {
        headers: {
          "User-Agent": "GenZOne/1.0",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Filter and format articles for Gen Z relevance
    const filteredArticles =
      data.articles?.map((article: any) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.image,
        publishedAt: article.publishedAt,
        category: determineCategory(article.title + " " + article.description),
        // ✅ Always include a source object to avoid undefined errors
        source: {
          name: article.source?.name || "Unknown Source",
        },
      })) || []

    return NextResponse.json({
      articles: filteredArticles,
      totalResults: data.totalArticles || 0,
    })
  } catch (error) {
    console.error("News API Error:", error)

    // ✅ Return fallback news with a source object
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
