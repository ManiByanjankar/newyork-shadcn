import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { ArchiveRestore, Edit, History, Pencil, Trash2, X } from "lucide-react";
import { UserDetailsSideTab } from "../../sections/user-table/userDetailsTabs";

// import Image from "next/image";

interface UserResizeableRowDetailProps {
  selectedRow: any;
  setSelectedRow: any;
}

const UserResizeableRowDetail: FC<UserResizeableRowDetailProps> = ({
  selectedRow,
  setSelectedRow,
}) => {
  return (
    <>
      <div className="flex mt-2">
        <div className="mt-2 ml-4 rounded-full flex justify-center bg-[#FCEEEE] items-center w-[35px] h-[35px]">
          <ArchiveRestore color="#D92626" strokeWidth={1.5} size={20} />
        </div>
        <div className="mt-2 ml-2 rounded-full flex justify-center bg-[#EEF4FC] items-center w-[35px] h-[35px]">
          <Pencil color="#297AD6" strokeWidth={1.5} size={20} />
        </div>
        <div className="mt-2 ml-2 rounded-full flex justify-center bg-[#F5F5F5] items-center w-[35px] h-[35px]">
          <History color="#676798" strokeWidth={1.5} size={20} />
        </div>

        <div className="flex space-x-2 mt-2 ml-auto">
          <Button
            variant="customGhost"
            onClick={() => {
              setSelectedRow(null);
            }}
          >
            <X color="#000000" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
      <div className="px-3 flex items-center justify-between">
        <div className="flex flex-col gap-1 my-3">
          <p className="text-lg font-semibold">User Details</p>
          <p className="text-gray-500 font-normal text-sm">
            here is the overview of the expense
          </p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="py-4 text-center">
        <UserDetailsSideTab />
      </div>
    </>
  );
};

export default UserResizeableRowDetail;
