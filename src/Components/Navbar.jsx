import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex bg-blue-500 text-white text-[1.2rem] font-sans  items-center justify-between py-8 px-6">
      <h1 className=" font-bold">Navbar</h1>
      <ul className="flex items-center gap-6 text-[1.2rem]">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
