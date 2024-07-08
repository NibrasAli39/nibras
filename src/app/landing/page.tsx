import React from "react";
import Image from "next/image";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="bg-blue-200 lg:p-20 p-4 text-4xl">CSS is a lot of fun</h1>
      <div className="max-w-3xl space-y-3 p-4 mx-auto">
        <h2 className="text-orange-300 text-2xl font-bold">
          Section One Title
        </h2>
        <Image
          src={"/relaxation.jpg"}
          width={1280}
          height={720}
          alt="Random Pic"
        />
        <p>
          Hello , this is a website for the senior devloper and designer Mr
          Nibbs . He is a very smart guy with multiple experiences that help him
          stand out and be in his own queue
        </p>
      </div>
    </div>
  );
};

export default Landing;
