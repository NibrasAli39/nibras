import React from "react";
import Header from "./components/Header";

const HomePage: React.FC = () => {
  return (
    <div className=" flex flex-col bg-amber-300">
      <Header />
      <section className="min-h-screen bg-amber-300">hi</section>
      <section className="min-h-screen bg-yellow-700">Bye</section>
    </div>
  );
};

export default HomePage;
