import React from "react";
import { navData } from "./Data";

const Footer = () => {
  return (
    <div className="bg-[#25262a] py-10 px-10 text-white">
      <div>
        <h1>Let's make something amazing together.</h1>
        <h1 className="pt-5">
          Start by <span className="underline text-[#63f4ac]">saying hi</span>
        </h1>
        <p className="pt-10">
          Hamza <span className="text-[#878789]">Zaheer</span>{" "}
          <span className="text-[#878789] text-xs pl-8">
            2022. All Rights Reserver
          </span>
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-xs text-[#878789]">Information</h1>
        <p className="mt-4 text-[#878789]">Islamabadm, Pakistan</p>
        <h1 className="text-xl">mhamzazaheer1@gmail.com</h1>
        <ul className="mt-5">
          {navData.map((item) => (
            <li
              key={item.id}
              className="hover:text-[#63f4ac] cursor-pointer gap-5 mt-2"
            >
              {item.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
