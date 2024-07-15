import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="p-6 lg:max-w-screen-xl mx-auto">
      <div className="flex max-w-screen-lg mx-auto flex-col mt-16 prose">
        <h1 className="text-6xl font-bold transform">
          I&apos;m <span className="bg-[#F1DE9A] p-2 rounded-lg">Nibras Ali</span>
        </h1>
        <p>
          Results-driven Senior full stack developer with a proven ability to
          quickly adapt to new technologies and deliver exceptional results. My
          technical toolkit includes Node.js, TypeScript, React, Next.js, and
          advanced AWS solutions, backed by a track record of success in
          startup, enterprise, and freelance contexts. From co-founding a
          startup to leading enterprise projects, I&apos;ve honed a diverse skill set
          and a keen eye for creating intuitive, visually appealing
          applications.
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
          <Link href={"/about"} className="no-underline">
            See More About Me
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
          <Link href={"https://linkedin.com/in/nibrasali39"}>
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
    </div>
  );
};

export default HomePage;
