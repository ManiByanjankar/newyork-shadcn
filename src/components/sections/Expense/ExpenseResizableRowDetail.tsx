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
      <div className="flex">
        <div className="flex space-x-2 mt-2">
          <Button
            variant="customGhost"
            onClick={() => {
              setSelectedRow(null);
            }}
          >
            <X color="#000000" strokeWidth={1.5} />
          </Button>
        </div>
        <div className="flex ml-auto mt-2 px-4 py-2">
          <Pencil color="#000000" strokeWidth={1.5} className="h-5 w-5" />
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
