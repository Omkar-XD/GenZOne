import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { generateTrendContent } from "@/lib/gemini"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)

    if (!body || typeof body.message !== "string" || !body.message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const message = body.message.trim()

    // Trend-focused prompt
    const trendPrompt = `As a Gen Z trend expert, respond to this query about trends: "${message}". 
Focus on current trends in fashion, food, culture, or technology. Keep the response engaging, 
informative, and relevant to young people. Include specific trend names or examples when possible.`

    // Call your Gemini helper
    const responseText = await generateTrendContent(trendPrompt)

    if (!responseText) {
      return NextResponse.json(
        { error: "No response from Gemini" },
        { status: 502 }
      )
    }

    const trendKeywords = extractTrendKeywords(responseText)

    return NextResponse.json({
      response: responseText,
      trends: trendKeywords,
    })
  } catch (err) {
    console.error("Chat API error:", err)
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    )
  }
}

function extractTrendKeywords(text: string): string[] {
  // Simple keyword extraction for trends
  const trendWords = [
    "fashion",
    "food",
    "culture",
    "technology",
    "style",
    "music",
    "art",
    "social media",
    "lifestyle",
  ]
  const words = text.toLowerCase().split(/\s+/)
  return trendWords
    .filter((trend) =>
      words.some((word) => word.includes(trend) || trend.includes(word))
    )
    .slice(0, 3)
}
