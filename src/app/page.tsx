import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto  min-h-screen">
      <div className="flex max-w-screen-lg mx-auto space-y-4 flex-col mt-20 ">
        <h1 className="text-4xl font-bold">
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
      </div>
    </div>
  );
};

export default HomePage;
