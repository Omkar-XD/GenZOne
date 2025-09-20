// lib/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ Missing GEMINI_API_KEY in .env.local");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Use Gemini 2.5 Pro (latest text-only model)
export const geminiModel = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

export async function generateTrendContent(prompt: string) {
  try {
    const result = await geminiModel.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    console.error("Gemini 2.5 Pro error:", error?.message || error);
    return null;
  }
}
