import { Banknote, Calendar, Landmark, Mail, Phone } from "lucide-react";

interface UserDetailResizeableProps {
  phone: string;
  email: string;
  accountName: string;
  monthlyPayRun: string;
}

const UserDetailResizeable: React.FC<UserDetailResizeableProps> = ({
  phone,
  email,
  accountName,
  monthlyPayRun,
}) => {
  return (
    <div className="space-y-2">
      <hr className="w-full" />
      <div className="flex items-center px-4 py-1">
        <div className="rounded-full border-2 flex justify-center items-center w-[45px] h-[45px]">
          <Phone
            color="#3D3D5A"
            strokeWidth={2}
            size={20}
            className="text-gray-600"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <span className="font-medium text-sm">Phone</span>
          <span className="text-gray-600 text-xs">{phone}</span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center px-4 py-1">
        <div className="rounded-full border-2 flex justify-center items-center w-[45px] h-[45px]">
          <Mail
            color="#3D3D5A"
            strokeWidth={2}
            size={20}
            className="text-gray-600"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <span className="font-medium text-sm">Email</span>
          <span color="" className="text-gray-600 text-xs">
            {email}
          </span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4 py-1">
        <div className="rounded-full border-2 flex justify-center items-center w-[45px] h-[45px]">
          <Landmark
            color="#3D3D5ACC"
            strokeWidth={2}
            size={20}
            className="text-gray-600"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <span className="font-medium text-sm">Account Name</span>
          <span className="text-xs">{accountName}</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="flex items-center px-4 py-1">
        <div className="rounded-full border-2 flex justify-center items-center w-[45px] h-[45px]">
          <Banknote
            color="#3D3D5A"
            strokeWidth={2}
            size={20}
            className="text-gray-600"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <span className="font-medium text-sm">Monthly Pay Run</span>
          <span className="text-xs">{monthlyPayRun}</span>
        </div>
      </div>

      <hr className="w-full" />
    </div>
  );
};

export default UserDetailResizeable;
