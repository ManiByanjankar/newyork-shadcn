import {
  CircleCheckBig,
  Dot,
  FileText,
  Image,
  Landmark,
  Pencil,
  X,
} from "lucide-react";
import UserDetailResizeable from "./userDetailTable";

export function UserDetailsSideTab() {
  return (
    <div className="">
      <div className="px-4 text-center">
        <Image
          className="rounded-full mx-auto"
          src=""
          alt="Aadarsha Lamichhane"
          width={64}
          height={64}
        />

        <h3 className="text-xl font-semibold mt-2">Aadarsha Lamichhane</h3>
        <div className="flex justify-center items-center mt-1">
          <p className="text-black-600 text-sm">Male</p>
          <Dot />
          <p className="text-black-600 text-sm bg-gray-200 flex justify-center items-center text-sm rounded-2xl w-[65px] h-[25px] mt-[3px]">
            Intern
          </p>
          <Dot />
          <p className="text-black-600 text-sm">Department Name</p>
        </div>
        <div className="flex justify-center items-center mt-2 gap-2">
          <p className="text-black-600 text-sm">User Payroll</p>
          <CircleCheckBig size={16} />
        </div>
      </div>

      <div className="p-4 flex justify-around space-x-2"></div>

      <div>
        <UserDetailResizeable
          phone="9841234567"
          email="test@test.com"
          accountName="NIC Asia Bank"
          monthlyPayRun="Rs. 75000"
        />
      </div>
    </div>
  );
}
