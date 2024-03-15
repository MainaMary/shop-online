import { Suspense } from "react";
import { Navbar } from "../components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col min-h-screen">
        <div className="grid grid-cols-5">
          <main className="col-span-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
