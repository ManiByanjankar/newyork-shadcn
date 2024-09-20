"use client";

import * as React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-login bg-cover bg-center"></div>
      <div className="w-1/2">{children}</div>
    </div>
  );
}
