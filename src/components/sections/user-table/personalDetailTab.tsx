// components/EmployeePayDetails.tsx
import {
  Banknote,
  Calendar,
  Folder,
  Landmark,
  Layers,
  LayoutTemplate,
  NotepadText,
  ReceiptText,
} from "lucide-react";

interface UserPersonalDetailsProps {
  expenseTitle: string;
  paymentForm: string;
  type: string;
  category: string;
  department: string;
  project: string;
  billType: string;
  remarks: string;
}

const UserPersonalDetails: React.FC<UserPersonalDetailsProps> = ({
  expenseTitle,
  paymentForm,
  type,
  category,
  department,
  project,
  billType,
  remarks,
}) => {
  const statusColor =
    expenseTitle === "Paid"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";

  const typeStatus = type === "Expense" ? "Expense" : "Income";

  return (
    <div className="space-y-2">
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <Banknote strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-[600] text-xs tracking-wide mb-1">
            Expense Title
          </span>
          <span className="text-gray-800 font-[500] text-[12px]">
            {expenseTitle}
          </span>
          <span className="text-green-500 text-[12px] font-[600]">
            {expenseTitle}
          </span>
        </div>
        <div className="flex flex-col">
          <span
            className={`bg-green-100 flex justify-center items-center font-medium text-green-600 text-xs rounded-2xl w-[55px] mt-[3px] ml-2 p-1 ${expenseTitle}`}
          >
            Paid
          </span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <Landmark strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tracking-wide">
          <span className="font-[600] text-xs mb-1">Payment From</span>
          <span className="text-gray-600 text-[12px] mr-auto">
            {paymentForm}
          </span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <Landmark strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tracking-wide">
          <span className="font-[600] text-xs mr-auto mb-1">Type</span>
          <span
            className={`bg-gray-100 flex justify-center items-center text-black-700 text-xs rounded-2xl w-[95px] font-medium mt-[3px] p-1 ${typeStatus}`}
          >
            {type}
          </span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <Layers strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tracking-wide">
          <span className="font-[600] text-xs mr-auto mb-1">Category</span>
          <span className="text-[12px]">{category}</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <LayoutTemplate strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tarcking-wide">
          <span className="text-xs font-[600] mr-auto mb-1">Department</span>
          <span className="text-[12px]">{department}</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <Folder strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tracking-wide">
          <span className="text-xs font-[600] mr-auto mb-1">Project</span>
          <span className="text-[12px]">{project}</span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <ReceiptText strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tarcking-wide">
          <span className="text-xs font-[600] mr-auto mb-1">Bill Type</span>
          <span className="text-[12px]">{billType}</span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
          <NotepadText strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4 tarcking-wide">
          <span className="text-xs font-[600] mr-auto mb-1">Remarks</span>
          <span className="text-[12px]">{remarks}</span>
        </div>
      </div>
    </div>
  );
};

export default UserPersonalDetails;
