import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { Edit, Pencil, Trash2, X } from "lucide-react";
import Image from "next/image";
import PayDetail from "../EmployeeDetail/employeeDetailTable";

interface CategoryResizeableRowDetailProps {
  selectedRow: any;
  setSelectedRow: any;
}

const CategoryResizeableRowDetail: FC<CategoryResizeableRowDetailProps> = ({
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
      <div className="p-4 flex items-center justify-between">
        <div className="flex flex-col gap-1 my-3">
          <Button variant="ghost" className="text-blue-500">
            <div className="rounded-full border flex justify-center bg-blue-200 items-center w-[40px] h-[40px] ">
              <Pencil className="w-5 h-5" />
            </div>
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button
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

export default CategoryResizeableRowDetail;
