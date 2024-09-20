import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PencilIcon, PhoneIcon, MailIcon } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className="w-full max-w-lg mx-auto shadow-md rounded-lg">
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Profile Details
          </h2>
          <button className="text-blue-500 hover:text-blue-600">
            <PencilIcon className="w-5 h-5" />
            <span className="sr-only">Edit profile</span>
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Here is the overview of the profile
        </p>
      </CardHeader>

      <CardContent className="pt-6 pb-4 px-4 flex flex-col items-center">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold">Aadarsha Lamichhane</h2>
      </CardContent>
      <hr className="w-full" />
      <CardContent className="p-0 pt-0">
        <div className="flex items-center px-4 py-4">
          <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
            <PhoneIcon strokeWidth={1.5} className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex flex-col ml-4">
            <span className="font-medium text-sm text-black-600">Phone</span>
            <span className="text-xs">987456321</span>
          </div>
        </div>
      </CardContent>
      <hr className="w-full" />
      <CardContent className="p-0 pt-0">
        <div className="flex items-center px-4 py-4">
          <div className="rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] ">
            <MailIcon strokeWidth={1.5} className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex flex-col ml-4">
            <span className="font-medium text-sm text-black-600">Email</span>
            <span className="text-xs">email@email.com</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
