"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideNavbar from "../sidenavbar/sidenav";
import MobileViewHamburger from "../mobile-navbar/mobileviewnav";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { PayrunTableDetails } from "./payrunDetailsTable";

// Define validation schema using Zod
const payRunSchema = z.object({
  employeeName: z.string().nonempty("Employee name is required"),
  employeeType: z.enum(["Intern", "Full-time", "Part-time"]),
  department: z.string().nonempty("Department is required"),
  email: z.string().email("Invalid email address"),
  contactNumber: z
    .string()
    .min(10, "Contact number should be at least 10 digits"),
  userPayroll: z.boolean(),
  salary: z.number().min(0, "Salary must be a positive number"),
  paymentFrom: z.string().nonempty("Please select a bank"),
});

type PayRunFormValues = z.infer<typeof payRunSchema>;

const AddPayRun: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PayRunFormValues>({
    resolver: zodResolver(payRunSchema),
  });

  const onSubmit = (data: PayRunFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <SideNavbar />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <MobileViewHamburger />

              <div className="relative mr-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[600px]"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <Image
                      src="/placeholder-user.jpg"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <hr className="w-full" />
            <main className="gap-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="rounded-sm w-full max-w-screen-lg mx-auto mt-8 mb-8">
                  <CardHeader>
                    <CardTitle>Add Pay Run</CardTitle>
                    <CardDescription>
                      Fill out the form below to add a new pay run for an
                      employee.
                    </CardDescription>
                  </CardHeader>
                  <hr className="w-full" />
                  <CardContent>
                    {/* Employee Details */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">
                        Employee Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="employeeName">Employee's Name</Label>
                          <Input
                            id="employeeName"
                            type="text"
                            placeholder="Enter employee's name"
                            {...register("employeeName")}
                            className={
                              errors.employeeName ? "border-red-500" : ""
                            }
                          />
                          {errors.employeeName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.employeeName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="employeeType">Employee Type</Label>
                          <Select
                            id="employeeType"
                            {...register("employeeType")}
                            placeholder="Select employee type"
                          >
                            <SelectTrigger placeholder="Select employee type" />
                            <SelectContent>
                              <SelectItem value="Intern">Intern</SelectItem>
                              <SelectItem value="Full-time">
                                Full-time
                              </SelectItem>
                              <SelectItem value="Part-time">
                                Part-time
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.employeeType && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.employeeType.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="department">Department</Label>
                          <Input
                            id="department"
                            type="text"
                            placeholder="Enter department"
                            {...register("department")}
                            className={
                              errors.department ? "border-red-500" : ""
                            }
                          />
                          {errors.department && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.department.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="contactNumber">Contact Number</Label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 border border-r-0 border-gray-300 rounded-l-md">
                              +977
                            </span>
                            <Input
                              id="contactNumber"
                              type="text"
                              placeholder="Enter contact number"
                              {...register("contactNumber")}
                              className={`rounded-l-none ${
                                errors.contactNumber ? "border-red-500" : ""
                              }`}
                            />
                          </div>
                          {errors.contactNumber && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.contactNumber.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="department">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center">
                        <Checkbox
                          id="userPayroll"
                          {...register("userPayroll")}
                        />
                        <Label htmlFor="userPayroll" className="ml-2">
                          This will list the User name in monthly Payruns
                        </Label>
                      </div>
                    </div>

                    {/* Salary Details */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">
                        Salary Details
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="salary">Salary</Label>
                          <Input
                            id="salary"
                            type="number"
                            placeholder="Enter salary amount"
                            {...register("salary")}
                            className={errors.salary ? "border-red-500" : ""}
                          />
                          {errors.salary && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.salary.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="paymentFrom">Payment From</Label>
                          <Select
                            id="paymentFrom"
                            {...register("paymentFrom")}
                            placeholder="Select bank"
                          >
                            <SelectTrigger placeholder="Select bank" />
                            <SelectContent>
                              <SelectItem value="Bank1">Bank 1</SelectItem>
                              <SelectItem value="Bank2">Bank 2</SelectItem>
                              <SelectItem value="Bank3">Bank 3</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.paymentFrom && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.paymentFrom.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Submit Button */}
                <hr className="w-full" />
                <div className="w-full max-w-screen-lg mx-auto mt-8 flex justify-end flex justify-end">
                  <Button variant="outline" className="mr-2">
                    Cancel
                  </Button>
                  <Button type="submit" variant="default">
                    Add
                  </Button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

export default AddPayRun;
