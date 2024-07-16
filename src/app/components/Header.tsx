import React from "react";

const Header: React.FC = () => {
  return (
    <div className=" md:flex pt-16 space-y-4 md:px-52 stick left-0 right-0  items-center md:justify-between">
      <p className="text-2xl text-bold text-center">Nibras Ali</p>
      <ul className="flex md:items-center space-x-12 justify-center">
        <li>
          <a>Hire Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
