"use client";

import React, { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import axios from "axios";
import useAuth from "../hooks/useAuth";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

const AdminWelcome = () => {
  const { isLoggedIn, role, username } = useAuth();
  //   console.log(role);
  //   const router = useRouter();
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [role, setRole] = useState();
  //   const [username, setUsername] = useState();

  //   useEffect(() => {
  //     const checkLoggedIn = async () => {
  //       try {
  //         const response = await axios.get(url + "/get/user");
  //         const userData = response.data;

  //         console.log("User is logged in", userData);
  //         setRole(userData.role);
  //         setUsername(userData.username);
  //         setIsLoggedIn(true);
  //       } catch (error) {
  //         setIsLoggedIn(false);
  //         console.log("User is not logged in");
  //         router.push("/"); // Redirect to the home screen if not logged in
  //       }
  //     };

  //     checkLoggedIn();
  //   }, [router]);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        Selamat Datang Di Panel Admin {username}
      </h1>
      <h1>Silahkan Pilih Pengelolaan di dropdown</h1>
    </div>
  );
};

export default AdminWelcome;
