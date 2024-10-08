import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { Edit, Pencil, Trash2, X } from "lucide-react";
import Image from "next/image";
import PayDetail from "../EmployeeDetail/employeeDetailTable";
import { ProcessPayRollDailog } from "./process-payroll-modal";
import { PartialPayRollDailog } from "./partial-payroll-modal";

interface ResizableRowDetailProps {
  selectedRow: any;
  setSelectedRow: any;
}

const ResizableRowDetail: FC<ResizableRowDetailProps> = ({
  selectedRow,
  setSelectedRow,
}) => {
  return (
    // <div>
    //   {JSON.stringify(selectedRow)}
    //   <Button
    //     onClick={() => {
    //       setSelectedRow(null);
    //     }}
    //   >
    //     Click me
    //   </Button>
    // </div>
    // components/EmployeePayRunDetails.tsx

    <div className="">
      <div className="px-4 py-2 flex items-center justify-between">
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
            className="hover:bg-transparent focus:ring-0 active:bg-transparent"
            variant="ghost"
            onClick={() => {
              setSelectedRow(null);
            }}
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
      <hr className="w-full" />

      <div className="p-4 text-center">
        <Image
          className="rounded-full mx-auto"
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="Aadarsha Lamichhane"
          width={64}
          height={64}
        />

        <h3 className="text-xl font-semibold mt-2">Aadarsha Lamichhane</h3>
        <div className="flex justify-center items-center">
          <p className="text-gray-600">UI/UX Designer</p>
          <span className="inline-block ml-3 mt-1 px-3 py-1 text-xs text-white bg-green-500 rounded-full">
            Active
          </span>
        </div>
      </div>

      <hr className="w-full" />

      <div className="p-4 border-t flex justify-around space-x-2">
        <PartialPayRollDailog />
        <ProcessPayRollDailog />
      </div>
      {/* <div className="p-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-gray-600">Bank Name</span>
          </div>
          <span className="text-gray-900 font-semibold">NIC Asia</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-gray-600">Payment Status</span>
          </div>
          <span className="text-green-500 font-semibold">Paid</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-gray-600">Month</span>
          </div>
          <span className="text-gray-900 font-semibold">January</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-gray-600">PayRun</span>
          </div>
          <span className="text-gray-900 font-semibold">Rs. 75,000</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-gray-600">Paid</span>
          </div>
          <span className="text-gray-900 font-semibold">Rs. 75,000</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-gray-600">Due</span>
          </div>
          <span className="text-gray-900 font-semibold">Rs. 0</span>
        </div>
      </div> */}
      <div>
        <PayDetail
          bankName="NIC Asia"
          paymentStatus="Paid"
          month="January"
          payRun="Rs. 75,000"
          paid="Rs. 75,000"
          due="Rs. 0"
        />
      </div>
    </div>
  );
};

export default ResizableRowDetail;
