"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="h-full grid place-items-center relative">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-4 w-96">
          <div className="flex flex-col gap-2 items-center">
            <span className="font-bold text-2xl">Welcome to Finance App</span>
          </div>
          <Button className="bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md">
            Continue With Google
          </Button>
        </div>
      </div>
    </div>
  );
}
