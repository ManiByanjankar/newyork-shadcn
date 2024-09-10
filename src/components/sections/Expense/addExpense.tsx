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
import { record, z } from "zod";
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
import { Banknote, CalendarIcon, Plus, Search, User, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AddExpenses() {
  const [isChecked, setIsChecked] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState<string | null>(null);

  const expenseSchema = (isChecked: boolean) =>
    z.object({
      accountId: z.string().nonempty("Bank Account is required"),
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
      recordedDate: z.date(),
      title: z.string().nonempty("Particular is required"),
      entityId: z.any(),
      amount: z
        .string()
        .nonempty("Amount is required")
        .refine((value) => !isNaN(value) && parseFloat(value) >= 0, {
          message: "Amount must be a non-negative number",
        }),
      bill: z.string().nonempty("Bill type is required"),
      categoryId: z.any(),
      remarks: z.string().optional(),
    });

  const formSchema = expenseSchema(isChecked);
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
      recordedDate: "",
      title: "",
      entityId: "",
      amount: "",
      bill: "",
      categoryId: "",
      remarks: "",
    },
  });

  const handleAddExpenses = (data) => {
    console.log("Form Data:", data);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFilesChange = (selectedFiles) => {
    const fileList = Array.from(selectedFiles);
    setFiles((prevFiles) => [...prevFiles, ...fileList]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // const handleFilesChange = (selectedFiles) => {
  //   const fileList = Array.from(selectedFiles);
  //   setFiles((prevFiles) => [...prevFiles, ...fileList]);
  //   console.log("Files after adding:", [...files, ...fileList]);
  // };

  // const removeFile = (index) => {
  //   setFiles((prevFiles) => {
  //     const updatedFiles = prevFiles.filter((_, i) => i !== index);
  //     console.log("Files after removing:", updatedFiles);
  //     return updatedFiles;
  //   });
  // };

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
                onSubmit={form.handleSubmit(handleAddExpenses)}
                className="space-y-6"
              >
                <Card className="rounded-lg w-full max-w-4xl mx-auto mt-8 mb-8">
                  <CardHeader>
                    <CardTitle>Add Expense</CardTitle>
                    <CardDescription>
                      Create a new expense detail
                    </CardDescription>
                  </CardHeader>
                  <hr className="w-full" />
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="accountId"
                          render={({ field }) => (
                            <FormItem className="space-y-0">
                              <FormLabel className="text-xs font-semibold">
                                Payment Account
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
                        {/* <FormField
                          control={form.control}
                          name="userType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Select Date
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
                        /> */}

                        <FormField
                          control={form.control}
                          name="recordedDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col justify-end space-y-0 ">
                              <FormLabel className="text-xs font-semibold">
                                Select Date
                              </FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="text-muted-foreground"
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span className="font-normal">
                                          Select date
                                        </span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    // disabled={(date) =>
                                    //   date > new Date() || date < new Date('1900-01-01')
                                    // }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* <FormField
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
                        /> */}
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Payment Account
                              </FormLabel>
                              <FormControl>
                                <Input type="text" placeholder="Particulars" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="entityId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Project
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Project Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Add project">
                                    <p className="p-1 gap-1 flex items-center cursor-pointer">
                                      <Plus size={19} />
                                      Add Project
                                    </p>
                                  </SelectItem>
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
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Amount
                              </FormLabel>
                              <div className="flex gap-2">
                                <span className="inline-flex items-center">
                                  <Select>
                                    <FormControl>
                                      <SelectTrigger className="w-[180px] rounded-r-none">
                                        <SelectValue placeholder="NPR" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="NPR">NPR</SelectItem>
                                      <SelectItem value="US$">USD</SelectItem>
                                      <SelectItem value="GBP">GBP</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Input
                                    type="number"
                                    placeholder="0.00"
                                    {...field}
                                    className="rounded-l-none"
                                  />
                                </span>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="entityId"
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
                                  <SelectItem value="Add project">
                                    <p className="p-1 gap-1 flex items-center cursor-pointer">
                                      <Plus size={19} />
                                      Add Department
                                    </p>
                                  </SelectItem>
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
                          name="bill"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Bill Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Bill Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Pan">Pan</SelectItem>
                                  <SelectItem value="Vat">Vat</SelectItem>
                                  <SelectItem value="Estimate">
                                    Estimate
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="categoryId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold">
                                Category
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Add project">
                                    <p className="p-1 gap-1 flex items-center cursor-pointer">
                                      <Plus size={19} />
                                      Add Category
                                    </p>
                                  </SelectItem>
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
                      <div className="flex flex-col gap-2 mt-8">
                        <FormField
                          control={form.control}
                          name="remarks"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid w-full gap-2">
                                  <Label htmlFor="message">Your message</Label>
                                  <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                    className="min-h-[80px]"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="remarks"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormControl>
                                <div className="grid w-full items-center gap-2">
                                  <Label htmlFor="picture">Attach File</Label>
                                  <Input
                                    id="picture"
                                    type="file"
                                    multiple
                                    onChange={(e) => {
                                      field.onChange(e.target.files);
                                      handleFilesChange(e.target.files);
                                    }}
                                  />
                                  <div> {files.length} files selected </div>
                                  <div className="flex items-center gap-2">
                                    <Button
                                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                      type="button"
                                      onClick={() =>
                                        document
                                          .getElementById("picture")
                                          ?.click()
                                      }
                                    >
                                      {fileName ? fileName : "Choose File"}
                                    </Button>

                                    <span>
                                      {files.length
                                        ? files.length + "files selected"
                                        : "No file choosen"}
                                    </span>
                                  </div>

                                  <ul>
                                    {files.map((file, index) => (
                                      <li
                                        key={index}
                                        className="mt-2 flex border rounded-lg justify-between items-center h-10  gap-3 w-full p-2"
                                      >
                                        <p className="inline-block overflow-hidden text-ellipsis whitespace-nowrap text-sm w-3/4">
                                          {file.name}
                                        </p>
                                        <X
                                          className="text-red-500 "
                                          size={20}
                                          onClick={() => removeFile(index)}
                                        />
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

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
