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
import { Calendar } from "lucide-react";

export function ProcessPayRollDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg" variant="default">
          Process Payroll
        </Button>
      </DialogTrigger>
      <div>
        <DialogContent className="sm:max-w-[560px] p-7">
          <DialogHeader className="gap-1 justify-center items-center mb-2">
            <DialogTitle className="tracking-wide">
              Are you sure you want to process payroll?
            </DialogTitle>
            <DialogDescription className="font-medium text-md">
              This action cannot be undone once you dispatch the amount
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 border rounded-lg">
            <div className="flex items-center px-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] ">
                <Calendar strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
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
                <Calendar strokeWidth={1.5} className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col ml-4 gap-1">
                <span className="font-semibold text-sm">Amount</span>
                <span className="text-xs text-green-600">Rs. 75000</span>
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
