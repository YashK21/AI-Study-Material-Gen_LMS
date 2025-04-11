"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const TopicInput = ({ userInput, selectedLvl }) => {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <h2>
        Enter the topic or paste the content for which you want to generate
        material
      </h2>
      <Textarea
        value={input}
        placeholder="Start Writing here"
        className="mt-2"
        onChange={(e) => {
          setInput(e.target.value);
          setInput((value) => userInput(value));
        }}
      />
      <Select onValueChange={(value) => selectedLvl(value)}>
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="easy" className="cursor-pointer">
            Easy
          </SelectItem>
          <SelectItem value="medium" className="cursor-pointer">
            Medium
          </SelectItem>
          <SelectItem value="difficult" className="cursor-pointer">
            Difficult
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TopicInput;
