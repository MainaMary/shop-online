import React, { Suspense } from "react";
import { Navbar } from "../components/navbar";

interface Props {
  children: React.ReactNode;
}

export default function LandingPageLayout({ children }: Props) {
  return (
    <div className="max-w-screen relative flex min-h-screen">
      <div className="w-[15%]">Side Navbar</div>
      <main className="max-w-screen flex-1">{children}</main>
    </div>
  );
}
