import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banknote, Calendar, TriangleAlert, User } from "lucide-react";

export function PartialPayRollDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg" variant="secondary">
          Partial Payroll
        </Button>
      </DialogTrigger>
      <div>
        <DialogContent className="sm:max-w-xl p-7">
          <DialogHeader className="gap-1 justify-center items-center mb-2">
            <div className="rounded-full border flex justify-center bg-gray-200 items-center w-[40px] h-[40px] ">
              <TriangleAlert color="#e41111" strokeWidth={2} size={20} />
            </div>
            <DialogTitle className="tracking-wide">
              Partial PayRun Dispatch
            </DialogTitle>
            <DialogDescription className="font-medium text-md">
              This action cannot be undone once you dispatch the amount
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="partialAmount">Partial Amount</Label>
            <Input
              id="partialAmount"
              type="text"
              defaultValue="40,000"
              className="mt-1"
            />
          </div>
          <div className="grid gap-4 py-4 border rounded-lg">
            <div className="flex items-center px-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] ">
                <User strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col ml-4 gap-1">
                <span className="font-semibold text-sm">Name</span>
                <span className="text-xs font-medium">Santosh Shrestha</span>
              </div>
            </div>
            <div className="flex items-center px-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] ">
                <Calendar strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col ml-4 gap-1">
                <span className="font-semibold text-sm">Month</span>
                <span className="text-xs font-medium">July</span>
              </div>
            </div>
            <div className="flex items-center px-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] ">
                <Banknote strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col ml-4 gap-1">
                <span className="font-semibold text-sm">Amount</span>
                <span className="text-xs text-black-600">Rs. 75000</span>
              </div>
            </div>
            <div className="flex items-center px-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] ">
                <Banknote strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col ml-4 gap-1">
                <span className="font-semibold text-sm">Partial Amount</span>
                <span className="text-xs text-[#4CAF50]">Rs. 40000</span>
              </div>
            </div>
            <div className="flex items-center px-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] ">
                <Banknote strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col ml-4 gap-1">
                <span className="font-semibold text-sm">Due</span>
                <span className="text-xs text-[#D92626]">Rs. 35000</span>
              </div>
            </div>
          </div>
          <DialogFooter className="mx-auto">
            <DialogClose asChild>
              <Button
                className="min-w-[250px]"
                variant="secondary"
                type="submit"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="min-w-[250px]" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
}
