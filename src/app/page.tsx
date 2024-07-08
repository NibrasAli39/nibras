import React from "react";
import Header from "./components/Header";

const HomePage: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <div className="flex p-20 ">
        <div className="space-y-4">
          <p className="text-5xl">
            Hello there , i'm <span> Nibras Ali </span>
          </p>
          <p className="text-5xl">
            {" "}
            I'm a{" "}
            <span className="text-blue-300"> Senior Fullstack Engineer </span>
          </p>
          <p>
            I have over 5 years of core experience in building SaaS and web
            products and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
