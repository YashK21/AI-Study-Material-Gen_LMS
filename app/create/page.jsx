"use client";
import React, { useState } from "react";
import { SelectOption, TopicInput } from "./_components/index";
import { Button } from "@/components/ui/button";

const CreateContent = () => {
  const [step, setStep] = useState(0);
  const handleUserInput = (filedName, fieldValue) => {
    console.log(filedName, fieldValue);
  };
  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-blue-700">
        Start Generating Your Material
      </h2>
      <p className="text-gray-500">
        Fill All the Details in order to generate study material
      </p>
      <div className="mt-10 flex">
        {step == 0 ? (
          <SelectOption
            selectedStudyMaterialType={(value) =>
              handleUserInput("selectedStudyMaterialType", value)
            }
          />
        ) : (
          <TopicInput
            userInput={(value) => handleUserInput("userInput", value)}
            selectedLvl={(value) => handleUserInput("selectedLvl", value)}
          />
        )}
      </div>
      <div className="flex justify-between w-1/2 mt-12 gap-5 sm:gap-8">
        <Button
          disabled={step == 0}
          variant="outline"
          className="cursor-pointer"
        >
          Previous
        </Button>

        {step == 0 ? (
          <Button
            onClick={(prev) => setStep(prev + 1)}
            className="bg-blue-400 hover:bg-blue-600 cursor-pointer"
          >
            Next
          </Button>
        ) : (
          <Button className="bg-blue-400 hover:bg-blue-600 cursor-pointer">
            Generate
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateContent;
