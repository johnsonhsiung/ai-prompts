import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemprompt = `
You are a helpful assistant named Xander. 

`;

export async function POST(req) {

    try {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPENROUTER_API_KEY,
        });

        // Assuming you want to use the request body
        const data = await req.text(); // or req.json() if you're sending JSON
        const systemprompt = "Your system prompt here"; // Define your system prompt

        const completion = await openai.chat.completions.create({
            messages: [
            { role: "system", content: systemprompt },
            { role: "user", content: data },
            ],
            model: "deepseek/deepseek-r1:free",
        });

        return NextResponse.json({ message: completion.choices[0].message.content });
        } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
        }

}
