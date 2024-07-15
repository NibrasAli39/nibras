import React from "react";

const Header: React.FC = () => {
  return (
    <div className=" md:flex pt-16 space-y-4 px-52 stick left-0 right-0  items-center md:justify-between">
      <p className="text-2xl text-center">Nibras</p>
      <ul className="flex md:items-center space-x-12 justify-center">
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
