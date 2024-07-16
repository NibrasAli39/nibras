import { NextResponse } from "next/server";
import RSSParser from "rss-parser";

const parser = new RSSParser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@nibrasali39");
    return NextResponse.json(feed.items);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
