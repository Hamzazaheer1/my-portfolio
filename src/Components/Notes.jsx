import React from "react";
import { CustomersData } from "./Data";
import Profile from "./images/Profile.PNG";

const Notes = () => {
  return (
    <div className="pt-10 px-10 bg-[#25262a] text-white ">
      <div>
        <h1 className="text-2xl">Testimonials</h1>
        <span className="text-[#878789]">What's clients say about me </span>
      </div>
      <div className="mt-8">
        <div className="bg-[#2d2e32] rounded mt-5 p-5 cursor-pointer hover:underline">
          <h1 className="text-[#63f4ac] text-2xl">*****</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ex omnis perferendis et sint obcaecati soluta enim labore velit ea.
          </p>
        </div>
      </div>
      <div className="pt-8">
        <div className="grid justify-center gap-10">
          {CustomersData.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={Profile}
                alt="profile"
                className="w-10 h-10 rounded-full "
              />
              <div>
                <h1>{item.name}</h1>
                <p className="text-xs">
                  {item.designation}{" "}
                  <span className="font-bold text-[#63f4ac]">
                    {item.testimonial}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
