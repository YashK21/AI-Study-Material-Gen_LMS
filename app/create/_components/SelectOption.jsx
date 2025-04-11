"use client";
import React, { useState } from "react";
import { Options } from "@/app/_constant";
import Image from "next/image";
const SelectOption = ({selectedStudyMaterialType}) => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        Select the topic for which you want to generate study material{" "}
      </h2>
      <div className=" mt-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {Options.map((option, idx) => {
          return (
            <div
              className={`border rounded-xl p-4 flex flex-col items-center justify-center hover:border-blue-500 cursor-pointer ${
                option.name === selectedOption && "border-blue-500"
              }`}
              key={idx}
              onClick={() => {setSelectedOption(option.name);selectedStudyMaterialType(option.name) }}
            >
              <Image
                src={option.icon}
                alt={option.name}
                width={50}
                height={50}
              />
              <h2 className="text-sm mt-2">{option.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectOption;
