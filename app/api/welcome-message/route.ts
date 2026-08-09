import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
        return NextResponse.json({ error: "Gemini API key not configured." }, { status: 500 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are a cute and friendly mascot for the Facebook page "Dramatic Sarang Edit". A new user has just visited our website for the very first time. Generate a warm, extremely respectful, and polite welcome message for them. You MUST start the message with "Dear visitor,". Keep it brief (under 50 words), engaging, and invite them to explore our viral K-Drama video edits. Use a very cute, friendly tone that both boys and girls will love, maybe include a cute emoji. Return ONLY the welcome message text.`,
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate welcome message." }, { status: 500 });
  }
}
