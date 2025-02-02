import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

const LoadDB = async () => {
    try {
        await ConnectDB();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};

LoadDB();

export async function GET(request) {
    return NextResponse.json({ msg: "API Working" });
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const filePath = path.join(process.cwd(), 'public', `${timestamp}_${image.name}`);
        
        await writeFile(filePath, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;
        console.log(imgUrl);
        return NextResponse.json({ imgUrl });
    } catch (error) {
        console.error("Failed to process the request:", error);
        return NextResponse.json({ error: "Failed to process the request" }, { status: 500 });
    }
}