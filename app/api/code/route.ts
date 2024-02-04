import OpenAI from 'openai';
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";

import {checkApiLimit, incrementApiLimit} from "@/lib/api-limit";
import {checkSubscription} from "@/lib/subscription";

const configuration = {
    apiKey: process.env.OPEN_AI_API_KEY
}

const openai = new OpenAI(configuration);

const instructionMessage: OpenAI.Chat.ChatCompletionMessage = {
    role: "assistant",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
}

export async function POST(req: Request) {

    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        if(!configuration.apiKey) {
            return new NextResponse("OpenAI API Key is not Configured.", {status: 500});
        }

        if(!messages || messages.length === 0) {
            return new NextResponse("Messages are required.", {status: 400});
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if(!freeTrial && !isPro) {
            return new NextResponse("Free trial limit reached. Please upgrade your account.", {status: 403});
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });

        if(!isPro) {
            await incrementApiLimit();
        }

        return NextResponse.json(response.choices[0].message, {status: 200});

    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal Server Error.", {status: 500})
    }
}