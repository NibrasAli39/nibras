import React from "react";

const Header: React.FC = () => {
  return (
    <div className="px-20 py-12 flex justify-between">
      <h1>Nibras</h1>
      <ul className="flex space-x-12">
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
