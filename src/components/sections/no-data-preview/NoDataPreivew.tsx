import { FileWarning } from "lucide-react";
import React from "react";

const NoDataPreivew = () => {
  return (
    <>
      <div className="rounded-full border flex justify-center bg-gray-200 items-center w-[40px] h-[40px] mx-auto">
        <FileWarning color="#2657e8" strokeWidth={1.5} />
      </div>
      <h4 className="mt-2 font-semibold text-sm"> No data availabe</h4>
      <p className="mt-1 text-xs text-gray-500">Add Expense to display data</p>
    </>
  );
};

export default NoDataPreivew;
