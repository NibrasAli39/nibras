import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className=" md:flex pt-16 space-y-4 md:px-52 stick left-0 right-0  items-center md:justify-between">
      <Link href={"/"}>
        <p className="text-2xl  text-center hover:font-bold">Nibras Ali</p>
      </Link>
      <Link
        href={"mailto:nibrasali39@gmail.com?subject=I%20want%20to%20hire%20you"}
        className="flex border-2 rounded-lg border-black p-2 md:items-center space-x-12 justify-center hover:font-bold"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default Header;
