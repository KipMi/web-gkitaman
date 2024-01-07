"use client";

import React, { useEffect, useState } from "react";
import AddUserForm from "./AddUserForm";
import TabelUser from "./TabelUser";

type FormData = {
  username: string;
  password: string;
  role: string;
  id: string;
};

const AddUserPage = () => {
  const [allUser, setAllUser] = useState<FormData[]>([]);

  const updateAllUser = (newUser: FormData) => {
    setAllUser((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div className="min-h-screen w-full p-5">
      <AddUserForm updateAllUser={updateAllUser} />
      <TabelUser allUser={allUser} setAllUser={setAllUser} />
    </div>
  );
};

export default AddUserPage;
