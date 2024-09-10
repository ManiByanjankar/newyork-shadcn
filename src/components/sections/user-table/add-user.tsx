"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Input } from "../../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Checkbox } from "../../ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideNavbar from "@/components/sections/sidenavbar/sidenav";
import MobileViewHamburger from "@/components/sections/mobile-navbar/mobileviewnav";
import { Banknote, Search, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function AddUsers() {
  const [isChecked, setIsChecked] = useState(false);

  const usersSchema = (isChecked: boolean) =>
    z.object({
      accountId: isChecked
        ? z.string().nonempty("Account name is required")
        : z.string().optional(),
      salary: isChecked
        ? z.string().nonempty("Salary is required")
        : z.string().optional(),
      departmentId: z.string().nonempty("Department name is required"),
      name: z.string().nonempty("Name is required"),
      phone: z
        .string()
        .length(10, { message: "Phone number must be exactly 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
      authAddress: z.string().nonempty("AuthAddress is required"),
      userType: z.string().nonempty("Usertype is required"),
      gender: z.string(),
    });

  const formSchema = usersSchema(isChecked);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountId: "",
      departmentId: "",
      name: "",
      phone: "",
      authAddress: "",
      userType: "",
      salary: "",
      gender: "",
    },
  });

  const handleAddPayRun = (data) => {
    console.log("Form Data:", data);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleAddPayRun)}
                className="space-y-6"
              >
                <Card className="rounded-lg w-full max-w-4xl mx-auto mt-8 mb-8">
                  <CardHeader>
                    <CardTitle>Add Pay Run</CardTitle>
                    <CardDescription>
                      Create a new Pay Run detail
                    </CardDescription>
                  </CardHeader>
                  <hr className="w-full" />
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="mb-5 flex items-center justfiy-center">
                        <div className="rounded-full border flex flex-col justify-center bg-gray-100 items-center w-[30px] h-[30px]">
                          <User className="h-4" strokeWidth={1.75} />
                        </div>
                        <h5 className="text-sm font-semibold ml-3">
                          Employee Details
                        </h5>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Employee's Name
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Enter name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="userType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Employee Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Employee Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Employee">
                                    Employee
                                  </SelectItem>
                                  <SelectItem value="Volunteer">
                                    Volunteer
                                  </SelectItem>
                                  <SelectItem value="Contract">
                                    Contract
                                  </SelectItem>
                                  <SelectItem value="Intern">Intern</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="departmentId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Department
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Department" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">
                                    Department 1
                                  </SelectItem>
                                  <SelectItem value="2">
                                    Department 2
                                  </SelectItem>
                                  <SelectItem value="3">
                                    Department 3
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Contact Number
                              </FormLabel>
                              <div className="flex">
                                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 border border-r-0 border-gray-300 rounded-l-md">
                                  +977
                                </span>
                                <FormControl>
                                  <Input
                                    placeholder="Enter contact number"
                                    {...field}
                                    className="rounded-l-none"
                                  />
                                </FormControl>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="authAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Enter email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col items-start mt-6">
                        <p className="font-semibold text-xs">User Payroll</p>
                        <div className="flex items-center gap-2 pt-3">
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={handleCheckboxChange}
                            className="h-4 w-4"
                          />
                          <span className="text-xs font-medium">
                            This will list the employee name in the monthly
                            payruns
                          </span>
                        </div>
                      </div>
                    </div>
                    {isChecked && (
                      <>
                        <hr className="w-full" />
                        <div className="mb-6 p-6">
                          <div className="mb-4 flex items-center justfiy-center">
                            <div className="rounded-full border flex flex-col justify-center bg-gray-100 items-center w-[30px] h-[30px]">
                              <Banknote className="h-4" strokeWidth={1.75} />
                            </div>
                            <h5 className="text-sm font-semibold ml-3">
                              Salary Details
                            </h5>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="salary"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs font-semibold">
                                    Salary
                                  </FormLabel>
                                  <FormControl>
                                    <Input placeholder="0.0" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="accountId"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs font-semibold">
                                    Payment From
                                  </FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select Account" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="1">
                                        Account 1
                                      </SelectItem>
                                      <SelectItem value="2">
                                        Account 2
                                      </SelectItem>
                                      <SelectItem value="3">
                                        Account 3
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </>
                    )}
                    <hr className="w-full" />
                    <div className="w-full max-w-screen-lg mx-auto p-6 flex justify-end">
                      <Button variant="outline" className="mr-2 w-[170px]">
                        Cancel
                      </Button>
                      <Button variant="default" className="w-[170px]">
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </Form>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
