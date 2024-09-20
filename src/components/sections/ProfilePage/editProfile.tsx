"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import { useForm } from "react-hook-form";
import { z } from "zod";

export function EditProfilePage() {
  // Schema with email validation
  const editProfileSchema = z.object({
    fullname: z.string().nonempty("Full name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
  });

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof editProfileSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="rounded-lg w-full max-w-screen-lg mx-auto mt-8 mb-8">
          <CardHeader>
            <CardTitle>Edit Profile Details</CardTitle>
            <CardDescription>Change the details of the profile</CardDescription>
          </CardHeader>
          <hr className="w-full" />
          <CardContent className="p-0">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                {/* Fullname field */}
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Test Tester 123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="email@address.com" {...field} />
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
              <Button variant="default" className="w-[170px]" type="submit">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
