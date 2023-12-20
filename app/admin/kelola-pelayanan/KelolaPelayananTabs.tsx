"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

const KelolaPelayananTabs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState();
  const [hasFetchData, setHasFetchData] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(url + "/get/user");
        const userData = response.data;

        console.log("User is logged in", userData);
        setRole(userData.role);
        console.log(role);
        setIsLoggedIn(true);
        setHasFetchData(true);
      } catch (error) {
        setIsLoggedIn(false);
        console.log("User is not logged in");
        router.push("/");
      }

      console.log(isLoggedIn);
    };

    if (!hasFetchData) {
      checkLoggedIn();
    }
  }, [hasFetchData, isLoggedIn, role]);

  return (
    <div className="tabs flex justify-center">
      <Link href={"./umum"} className="tab tab-bordered hover:tab-active">
        Pelayanan Ibadah
      </Link>
      <Link
        href={"./persekutuan-doa"}
        className="tab tab-bordered hover:tab-active"
      >
        Persekutuan Doa
      </Link>
      <Link
        href={"./renungan-harian"}
        className="tab tab-bordered hover:tab-active"
      >
        Renungan Harian
      </Link>
      <Link href={"./pendeta"} className="tab tab-bordered hover:tab-active">
        Pendeta
      </Link>
    </div>
  );
};

export default KelolaPelayananTabs;
