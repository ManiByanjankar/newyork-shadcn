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
import { Calendar, TriangleAlert, X } from "lucide-react";

export function ClosePayRunDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full outline outline-1 outline-blue-500 text-blue-500"
          size="sm"
          variant="outline"
        >
          <X color="#0f45e6" />
          Close Pay Run
        </Button>
      </DialogTrigger>
      <div>
        <DialogContent crossStyle="hidden" className="sm:max-w-[560px] p-7">
          <DialogHeader className="gap-1 justify-center items-center mb-2">
            <div className="rounded-full border flex justify-center bg-gray-200 items-center w-[50px] h-[50px] mb-3">
              <TriangleAlert color="#e41111" strokeWidth={1.75} />
            </div>
            <DialogTitle>
              Are you sure you want to close the pay run?
            </DialogTitle>
            <DialogDescription className="font-medium text-md">
              This action cannot be undone once you dispatch the amount
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mx-auto mt-3">
            <DialogClose asChild>
              <Button
                className="min-w-[230px] "
                variant="secondary"
                type="submit"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="min-w-[230px] fw-[600]" type="submit">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
}
