"use client";

import React, { useEffect, useState } from "react";
import EditUserForm from "./EditUserForm";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

type UserType = {
  username: string;
  password: string;
  role: string;
};

const EditUserPage = ({ params }: { params: { userId: string } }) => {
  const [user, setUser] = useState<UserType>();
  const id = params.userId;
  console.log(id);
  const userUrl = `${url}/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(userUrl);
      const userData: UserType = response.data;

      setUser(userData);
    };

    fetchData();
  }, [userUrl]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      {user ? (
        <EditUserForm user={user} id="985a53ed-6cb8-4475-bb1e-be6b1b3e4369" />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default EditUserPage;
