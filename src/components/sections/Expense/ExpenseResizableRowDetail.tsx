import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { Edit, Pencil, Trash2, X } from "lucide-react";
// import Image from "next/image";
import { ExpenseDetailsTabs } from "./ExpenseDetailTabs";

interface ExpenseResizableRowDetailProps {
  selectedRow: any;
  setSelectedRow: any;
}

const ExpenseResizableRowDetail: FC<ExpenseResizableRowDetailProps> = ({
  selectedRow,
  setSelectedRow,
}) => {
  return (
    <>
      <div className="px-4 flex items-center justify-between">
        <div className="flex flex-col gap-1 my-3">
          <div
            className="rounded-full
             flex justify-center bg-[#EEF4FC] items-center w-[40px] h-[40px] "
          >
            <Pencil size={20} color="#297AD6" />
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            className="hover:bg-transparent focus:ring-0 active:bg-transparent px-0 py-0"
            variant="ghost"
            onClick={() => {
              setSelectedRow(null);
            }}
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
      <div className="px-3 flex items-center justify-between">
        <div className="flex flex-col gap-1 my-3">
          <h2 className="text-lg font-semibold">Expense Details</h2>
          <p className="text-gray-500 font-normal text-sm">
            here is the overview of the expense
          </p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="py-4 text-center">
        <ExpenseDetailsTabs />
      </div>
    </>
  );
};

export default ExpenseResizableRowDetail;
