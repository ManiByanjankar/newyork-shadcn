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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function AddProjectForm() {
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
        <Button className="bg-blue-600 ml-auto w-[15rem]">
          <Plus size={20} strokeWidth={2} className="mr-2" />
          Add Project
        </Button>
      </DialogTrigger>
      <DialogContent crossStyle="hidden" className="sm:max-w-[442px]">
        <DialogHeader className="gap-1 mb-2">
          <DialogTitle>Add Project</DialogTitle>
          <DialogDescription className="font-medium text-sm">
            Create a new project
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="departmentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter department name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mx-auto sm:justify-center mt-3">
              <DialogClose asChild>
                <Button
                  className="min-w-[12rem] "
                  variant="secondary"
                  type="submit"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button className="min-w-[12rem] fw-[600]" type="submit">
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
