import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex max-w-screen-lg mx-auto space-y-10 flex-col mt-32 ">
        <h1 className="text-6xl font-bold">
          I'm <span className="bg-[#F1DE9A] p-2 rounded-lg">Nibras Ali</span>
        </h1>
        <p>
          Results-driven full stack developer with a proven ability to quickly
          adapt to new technologies and deliver exceptional results. My
          technical toolkit includes Node.js, TypeScript, React, Next.js, and
          advanced AWS solutions, backed by a track record of success in
          startup, enterprise, and freelance contexts. From co-founding a
          startup to leading enterprise projects, I've honed a diverse skill set
          and a keen eye for creating intuitive, visually appealing
          applications.
        </p>
        <p>
          Known for my ability to forge strong working relationships, I bring a
          blend of technical expertise and interpersonal skills to every
          project. My adaptability and positive attitude, combined with a
          passion for innovative solutions, make me an ideal collaborator for
          your next big idea. Let's connect and explore how my unique
          combination of skills, experience, and personality can drive your
          project to success.
        </p>
        <div className="flex group shrink max-w-fit space-x-2 hover:border-b-2 hover:border-[#F1DE9A] hover:pb-2">
          <Link href={"/about"} className="">
            See More About Me
          </Link>
          <Image
            className="group-hover:animate-bounce"
            alt="next arrow"
            src={"/trending-flat.svg"}
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
