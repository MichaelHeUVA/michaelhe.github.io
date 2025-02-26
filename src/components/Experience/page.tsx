import React from "react";
import { ExperienceList } from "@/utils/constants";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience">
      <div className="flex justify-center text-5xl mt-10">Experience</div>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-[80%] justify-evenly">
          {ExperienceList.map((items) => (
            <a
              key={items?.companyName}
              href={items?.companyLink}
              target="_blank"
              className="group bg-[#176B87] w-[85%] h-fit p-6 rounded-xl mt-5 transition duration-500 ease-in-out hover:shadow-[inset_0_0_5px_0_rgba(100,204,197,1)]"
            >
              <div className="flex">
                <div className="mr-5 mt-[5px]">
                  {items.companySVG ? (
                    <div className="w-[75px]">
                      <Image
                        src={items.companySVG}
                        width={75}
                        height={75}
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div className="text-3xl transition duration-500 ease-in-out group-hover:text-[#64CCC5] mb-2">
                      {items?.companyName}
                    </div>
                    <div className="italic">{items?.date}</div>
                  </div>
                  <div className="font-bold">{items?.role}</div>
                  <div>
                    {items?.description.map((list) => (
                      <div key={list}>• {list}</div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
