// components/EmployeePayDetails.tsx
import { Banknote, Calendar, Landmark } from "lucide-react";

interface PayDetailProps {
  bankName: string;
  paymentStatus: string;
  month: string;
  payRun: string;
  paid: string;
  due: string;
}

const PayDetail: React.FC<PayDetailProps> = ({
  bankName,
  paymentStatus,
  month,
  payRun,
  paid,
  due,
}) => {
  const statusColor =
    paymentStatus === "Paid"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";

  return (
    <div className="space-y-2">
      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
          <Landmark strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-medium text-sm">Bank Name</span>
          <span className="text-gray-600 text-xs">{bankName}</span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
          <Landmark strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-medium text-sm">Payment Status</span>
          <span
            className={`bg-green-100 flex justify-center items-center text-green-700 text-sm rounded-2xl w-[55px] mt-[3px] ${statusColor}`}
          >
            {paymentStatus}
          </span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
          <Calendar strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-medium text-sm">Month</span>
          <span className="text-xs">{month}</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
          <Banknote strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-medium text-sm">PayRun</span>
          <span className="text-xs">{payRun}</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
          <Banknote strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-sm font-medium">Paid</span>
          <span className="text-xs">{paid}</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4">
        <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
          <Banknote strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-sm font-medium">Due</span>
          <span className="text-xs">{due}</span>
        </div>
      </div>
    </div>
  );
};

export default PayDetail;
