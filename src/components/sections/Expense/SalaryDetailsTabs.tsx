import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalExpenseDetails from "./PersonalExpenseTab";
import { FileText, Image, Landmark } from "lucide-react";
import PersonalSalaryDetail from "./PersonalSalaryTab";

export function SalaryDetailsTab() {
  return (
    <Tabs defaultValue="personaldetail" className="w-auto">
      <div className="p-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="personaldetail"
            className="text-sm font-[500] tracking-wide"
          >
            Personal Details
          </TabsTrigger>
          <TabsTrigger
            value="attachments"
            className="text-sm font-[500] tracking-wide"
          >
            Attachments
            <span className="text-sm bg-blue-100 text-blue-600 rounded-full px-2 ml-2">
              2
            </span>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="personaldetail">
        <div className="py-2">
          <PersonalSalaryDetail
            expenseTitle="July 11110, 2024"
            paymentForm="NOOOIC Asia"
            type="Salary"
            category="Category Name"
            department="Department Name"
            project="Project Name"
            billType="Bill Type Demo"
            remarks="Remarks"
          />
        </div>
      </TabsContent>
      <TabsContent value="attachments">
        <div className="py-2 px-4">
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex flex-col items-center justify-center bg-stone-300 h-36 rounded-lg mb-2">
                <div className="bg-gray-100 rounded-full p-4">
                  <Image strokeWidth={1.5} className="w-5 h-5 text-stone-500" />
                </div>
              </div>
              <span className="mt-2 text-xs font-[600] text-gray-600 mr-auto flex mb-2">
                File name.pdf
              </span>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex flex-col items-center justify-center bg-stone-300 h-36 rounded-lg mb-2">
                <div className="bg-gray-100 rounded-full p-4">
                  <Image strokeWidth={1.5} className="w-5 h-5 text-stone-500" />
                </div>
              </div>
              <span className="mt-2 text-xs font-[600] text-gray-600 mr-auto flex mb-2">
                image.jpg
              </span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
