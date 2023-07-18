import { CustomButton } from "@components";
import React from "react";

const SuppliersPage = () => {
  return (
    <div className="container mx-auto px-10 space-x-4 text-center">
      <CustomButton
        title="레모네이드"
        btnType="button"
        containerStyles="text-blue-400 rounded-full bg-white min-w-[130px] h-20"
      />
      <CustomButton
        title="플로"
        btnType="button"
        containerStyles="text-blue-400 rounded-full bg-white min-w-[130px] h-20"
      />
    </div>
  );
};

export default SuppliersPage;
