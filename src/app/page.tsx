import React from "react";
import Header from "./components/Header";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="p-12 md:p-20 min-h-screen">
      <Header />
      <div></div>
    </div>
  );
};

export default HomePage;
