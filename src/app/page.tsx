"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";

interface Post {
  guid: string;
  title: string;
  link: string;
  "content:encoded": string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/medium");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (id) {
      const post = posts.find((post) => post.guid === id);
      setSelectedPost(post || null);
    } else {
      setSelectedPost(null);
    }
  }, [id, posts]);

  return (
    <div className="p-6 lg:max-w-screen-xl mx-auto">
      <div className="flex max-w-screen-lg mx-auto flex-col mt-16 prose">
        <h1 className="text-3xl md:text-4xl font-bold transform">
          I&apos;m{" "}
          <span className="bg-[#F1DE9A] p-2 rounded-lg">Nibras Ali</span>
        </h1>
        <p>
          Results-driven Senior full stack developer and Computer Scientist with
          a proven ability to quickly adapt to new technologies and deliver
          exceptional results. My technical toolkit includes Node.js,
          TypeScript, React, Next.js, and advanced AWS solutions, backed by a
          track record of success in startup, enterprise, and freelance
          contexts. From co-founding a startup to leading enterprise projects,
          I&apos;ve honed a diverse skill set and a keen eye for creating
          intuitive, visually appealing applications.
        </p>
        <p>
          Known for my ability to forge strong working relationships, I bring a
          blend of technical expertise and interpersonal skills to every
          project. My adaptability and positive attitude, combined with a
          passion for innovative solutions, make me an ideal collaborator for
          your next big idea. Let&apos;s connect and explore how my unique
          combination of skills, experience, and personality can drive your
          project to success.
        </p>
        <div className="flex items-center max-w-fit space-x-2 hover:pb-[-3] hover:border-b-2 hover:border-[#F1DE9A] ">
          <Link
            href={
              "mailto:nibrasali39@gmail.com?subject=I%20want%20to%20hire%20you"
            }
            className="no-underline"
          >
            Get in Touch
          </Link>
          <Image
            className="mt-1 mb-1"
            alt="next arrow"
            src={"/trending-flat.svg"}
            width={32}
            height={32}
          />
        </div>
        <div className="flex max-w-fit space-x-6">
          <Link href={"https://github.com/nibrasali39"}>
            <Image
              className=""
              alt="github.png"
              src={"/github.svg"}
              width={32}
              height={32}
            />
          </Link>
          <Link href={"https://www.instagram.com/clayinck/"}>
            <Image
              className=""
              alt="instagram.png"
              src={"/instagram.svg"}
              width={32}
              height={32}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/nibrasali"}>
            <Image
              className=""
              alt="linkedin.png"
              src={"/linkedin.svg"}
              width={32}
              height={32}
            />
          </Link>
          <Link href={"https://medium.com/@nibrasali39"}>
            <Image
              className=""
              alt="medium.png"
              src={"/medium.svg"}
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-lg mt-16 mx-auto prose">
        <h2 className="md:text-3xl">Work</h2>
        <h3>
          TransIT <span className="text-gray-400 text-sm">(2021-Present)</span>
        </h3>
        <p>
          Senior Software Engineer currently working closely with leadership in
          architecting and building scalable cloud solutions
        </p>
        <h3>
          Strada <span className="text-gray-400 text-sm">(2020-2021)</span>
        </h3>
        <p>
          Worked as full stack developer to build e-commerce art platform for
          highly curated digital assets
        </p>
        <h3>
          UshAR <span className="text-gray-400 text-sm">((2018-2020)</span>{" "}
        </h3>
        <p>
          Co-founded ed-tech startup and led React / React Native teams for
          client SaaS products
        </p>
      </div>
      <div className="max-w-screen-lg mt-16 mx-auto prose">
        <h2 className="md:text-3xl">Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.guid}>
              <Link href={`/post/${encodeURIComponent(post.guid)}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
