import React from "react";
import Test from "./images/Profile.PNG";

import { cardData } from "./Data";

const Works = () => {
  return (
    <div className="bg-[#25262a] pt-10 px-10">
      <div>
        <div>
          <p className="text-[#5a5b5f]">Introduction</p>
          <h1 className="pt-5 text-2xl text-white">Hello! I'm Hamza Zaheer</h1>
          <h2 className="pt-5 text-white">
            Every greate design begin with an even better story
          </h2>
          <p className=" pt-4 text-[#5a5b5f]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia est
            ut impedit vel nesciunt aliquam amet! Ducimus nemo dolor adipisci at
            dolorum enim aut obcaecati quis expedita non, consequuntur explicabo
            provident? Adipisci dolor alias optio nihil veritatis voluptas saepe
            eius soluta quidem odit totam, sapiente ex? Cum laboriosam quas
            nemo?
          </p>
        </div>
        <div className="pt-10">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="bg-[#2d2e32] rounded mt-5 p-5 cursor-pointer hover:underline"
            >
              <h1 className="text-[#63f4ac] text-2xl">{item.title}</h1>
              <p className="text-gray-500">{item.desc}</p>
              <p className="text-white pt-6">{item.projects}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Latest works */}
      <div className="mt-10">
        <h1 className="text-white text-2xl">Latest Works</h1>
        <p className="text-[#5a5b5f] mt-4">
          Perfect solution for digital experience
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <img src={Test} alt={"testing"} className=" w-32 h-64 rounded" />
          <img src={Test} alt={"testing"} className=" w-32 h-64 rounded" />
        </div>
        <div className="flex justify-center mt-10">
          <img src={Test} alt={"testing"} className=" w-32 h-64 rounded" />
        </div>
        <p className="mt-10 text-xl underline text-[#63f4ac] cursor-pointer">
          Let's Chat!
        </p>
        <p className="mt-5 text-white">
          * Some projects not allow publish by Customers, if you want to see
          more, <span className="text-[#63f4ac] underline">contact</span>
        </p>
      </div>
    </div>
  );
};

export default Works;
