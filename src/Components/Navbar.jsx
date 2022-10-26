import React from "react";
import { navData } from "./Data";

const Navbar = () => {
  // #25262a other bg color
  return (
    <div className="bg-[#25262a] text-white w-screen flex justify-between p-8 lg:px-40">
      <h1 className=" font-bold text-xl">
        Hamza <span className="text-[#878789]"> Zaheer</span>
      </h1>
      <ul className="flex gap-4 ">
        {navData.map((item) => (
          <li key={item.id} className="hover:text-[#63f4ac] cursor-pointer ">
            {item.data}
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 pl-8">
        <li className="hover:text-[#63f4ac] cursor-pointer">Icon1</li>
        <li className="hover:text-[#63f4ac] cursor-pointer">Icon2</li>
        <li className="hover:text-[#63f4ac] cursor-pointer">Icon3</li>
      </ul>
    </div>
  );
};

export default Navbar;
