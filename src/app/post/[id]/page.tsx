// app/post/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface Post {
  guid: string;
  title: string;
  "content:encoded": string;
}

const Post: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/api/medium");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Post[] = await response.json();
        const decodedId = decodeURIComponent(id as string);
        const selectedPost = data.find((post) => post.guid === decodedId);
        setPost(selectedPost || null);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prose max-w-screen-lg p-4 mx-auto items-center flex flex-col mt-20">
      <h1 className="text-2xl md:text-4xl">{post.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post["content:encoded"] }}
      />
      <button onClick={() => router.push("/")}>Back to list</button>
    </div>
  );
};

export default Post;
