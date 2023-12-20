import React from "react";
import AddUserForm from "./AddUserForm";
import TabelUser from "./TabelUser";

const AddUserPage = () => {
  return (
    <div className="min-h-screen w-full p-5">
      <AddUserForm />
      <TabelUser />
    </div>
  );
};

export default AddUserPage;
