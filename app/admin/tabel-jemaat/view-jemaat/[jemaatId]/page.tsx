import React from "react";
import ViewJemaatForm from "./ViewJemaatForm";

const ViewJemaatPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="m-10 border-2 rounded-md h-screen w-3/4 p-5">
        <ViewJemaatForm />
      </div>
    </div>
  );
};

export default ViewJemaatPage;
