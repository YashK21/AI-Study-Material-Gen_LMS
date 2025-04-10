"use client";
import { db } from "@/dbConfigs/db";
import { USER_TABLE } from "@/dbConfigs/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
  const { user } = useUser();
  useEffect(() => {
    user && checkIfUserExist();
  }, [user]);
  const checkIfUserExist = async () => {
    const response = await axios.post("/api/create-user", { user });
    // console.log(response.data);
  };
  return <div>{children}</div>;
};

export default Provider;
