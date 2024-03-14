import React from "react";
import Link from "next/link";
interface Props {
  children?: React.ReactNode;
  title: string;
  footerLinks: {
    path: string;
    label: string;
  }[];
}
export function FooterList({ title, footerLinks }: Props) {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
      <h1 className="text-base my-2 font-bold">{title}</h1>
      {footerLinks.map((item) => (
        <Link href={item.path}>{item.label}</Link>
      ))}
    </div>
  );
}
