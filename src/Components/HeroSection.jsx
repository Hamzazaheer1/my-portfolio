import React from "react";
import ProfilePic from "./images/Profile.PNG";

const HeroSection = () => {
  return (
    <div className="bg-[#25262a] text-white w-screen px-10 pt-10">
      <div>
        <button className="bg-[#63f4ac] rounded p-1 text-black">
          Front-End Developer
        </button>
        <h1 className="mt-10 text-4xl ">Talk is cheap show me the code</h1>
        <p className="mt-10 text-[#878789]">
          I design the code beautifully simple things, and i love what i do
        </p>
        <p className="mt-10 text-xl underline text-[#63f4ac] cursor-pointer">
          Let's Chat!
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={ProfilePic}
          alt={"myPicture"}
          className="w-40 mt-10 rounded"
        />
      </div>
    </div>
  );
};

export default HeroSection;
