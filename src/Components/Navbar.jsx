import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-700 text-white w-full h-full flex justify-between p-4 px-36">
      <h1 className=" font-bold">
        Hamza <span className="text-gray-400"> Zaheer</span>
      </h1>
      <ul className="flex gap-4 ">
        <li className="hover:text-green-500 cursor-pointer ">Services</li>
        <li className="hover:text-green-500 cursor-pointer">Works</li>
        <li className="hover:text-green-500 cursor-pointer">Notes</li>
        <li className="hover:text-green-500 cursor-pointer">Contacts</li>
      </ul>
      <ul className="flex gap-4 pl-8">
        <li className="hover:text-green-500 cursor-pointer">Icon1</li>
        <li className="hover:text-green-500 cursor-pointer">Icon2</li>
        <li className="hover:text-green-500 cursor-pointer">Icon3</li>
      </ul>
    </div>
  );
};

export default Navbar;
