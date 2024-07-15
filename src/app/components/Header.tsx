import React from "react";

const Header: React.FC = () => {
  return (
    <div className=" flex pt-16  px-52 stick left-0 right-0  items-center justify-between">
      <p className="text-2xl">Nibras</p>
      <ul className="flex space-x-12 items-center">
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
