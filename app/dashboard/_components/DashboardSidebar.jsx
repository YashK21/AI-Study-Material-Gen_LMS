"use client";
import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LayoutDashboardIcon, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const DashboardSidebar = () => {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboardIcon,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const currentPath = usePathname();
  return (
    <div className="h-screen shadow-md">
      <div className="flex gap-3 items-center p-5">
        <Image src={logo} alt="logo" width={40} height={40} />
        <h3 className="font-bold text-2xl">Easy Study</h3>
      </div>
      <div className="m-10">
        <Button className="bg-blue-500 w-full">Create New</Button>
        <div className="mt-5">
          {MenuList.map((menuItem, idx) => {
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3 ${
                  currentPath == menuItem.path ? "bg-slate-200" : ""
                } `}
              >
                <menuItem.icon />
                <h2 className="font-medium">{menuItem.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border mx-5 p-2 w-[85%] bg-slate-100 rounded-lg absolute bottom-10">
        <h2 className="text-lg mb-2">Available Credits : 5</h2>
        <Progress value={30} />
        <h2 className="text-sm">1 out of 5 credits used</h2>
        <Link
          href={"/dashboard/upgrade"}
          className="text-blue-500 text-sm mt-3"
        >
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
