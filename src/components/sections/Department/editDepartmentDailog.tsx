"use client";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function EditDeparmentForm() {
  const departmentSchema = z.object({
    departmentId: z.string().nonempty("Department name is required"),
  });

  const form = useForm<z.infer<typeof departmentSchema>>({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      departmentId: "",
    },
  });

  const onSubmit = (data: z.infer<typeof departmentSchema>) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <Pencil className="h-5 w-5 cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent crossStyle="hidden" className="sm:max-w-[440px]">
        <DialogHeader className="gap-1 mb-2">
          <DialogTitle>Edit Department Name</DialogTitle>
          <DialogDescription className="font-medium text-sm">
            You may change the department name
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="departmentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Department Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Rumsan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex sm:justify-center">
              <DialogClose asChild>
                <Button className="min-w-48 " variant="secondary" type="submit">
                  Cancel
                </Button>
              </DialogClose>
              <Button className="min-w-48 fw-[600]" type="submit">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
