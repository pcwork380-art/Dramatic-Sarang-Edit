import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    if (!process.env.GEMINI_API_KEY) {
        return NextResponse.json({ error: "Gemini API key not configured." }, { status: 500 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are "Dramatic Sarang Edit AI", the official AI assistant for the Facebook page "Dramatic Sarang Edit". You must reply respectfully and politely. The user is asking a question or making a request: "${prompt}". 
      
Provide a thoughtful, engaging, and concise response. If they ask for video recommendations, viral videos, or anything related to videos, you MUST ONLY suggest videos from our Facebook page. Direct them to our page's videos (https://www.facebook.com/dramaticsarangedit11/videos). Do not suggest outside videos or links. If they ask general questions, answer them respectfully as the voice of the "Dramatic Sarang Edit" community. Format your response clearly using markdown. Keep your tone enthusiastic, friendly, respectful, and tailored to fans of emotional and dramatic romance edits.`,
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate response. Please try again." }, { status: 500 });
  }
}
