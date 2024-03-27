import React, { Suspense } from "react";
import { SideNav } from "@/app/components";

interface Props {
  children: React.ReactNode;
}

export default function LandingPageLayout({ children }: Props) {
  return (
    <div className="max-w-screen relative flex min-h-screen">
      <SideNav />
      <main className="max-w-screen flex-1">{children}</main>
    </div>
  );
}
