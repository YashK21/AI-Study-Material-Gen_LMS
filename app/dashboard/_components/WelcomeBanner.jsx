"use client";
import Image from "next/image";
import React from "react";
import laptopLogo from "../../../public/laptop.png";
import { useUser } from "@clerk/nextjs";
const WelcomeBanner = () => {
  const { user } = useUser();
  return (
    <div className="p-5 bg-blue-500 w-full text-white rounded-lg flex gap-6 items-center">
      <Image src={laptopLogo} width={100} height={100} />
      <div>
        <h2 className="font-bold text-3xl">Hello, {user?.firstName}</h2>
        <p className="">Welcome Back, It's time to study</p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
