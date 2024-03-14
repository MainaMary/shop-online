import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FooterList } from "./footer-list";
const categories = [
  {
    label: "Phone",
    path: "/phone",
  },
  {
    label: "Tablet",
    path: "/tablet",
  },
  {
    label: "Laptop",
    path: "/tablet",
  },
];
const contact = [
  {
    label: "Contact us",
    path: "",
  },
  {
    label: "Shipping policy",
    path: "",
  },
  {
    label: "FAQs",
    path: "",
  },
];
const icons = [
  {
    icon: <FaFacebookF size={20} />,
    label: "",
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "",
  },
  {
    icon: <FaTwitter size={20} />,
    label: "",
  },
];
export function Footer() {
  return (
    <footer className=" bg-slate-700 text-slate-200 text-sm py-4 flex flex-col md:flex-row justify-between">
      <FooterList title="Shop categories" footerLinks={categories} />

      <FooterList title="Customer services" footerLinks={contact} />
      <div>
        <h1 className="text-base my-2 font-bold">Our socials</h1>
        <div className="flex gap-2 items-center h-auto m-auto justify-center">
          {icons.map((icon) => (
            <Link
              href={icon.label}
              className="w-[40px] h-[40px] rounded-full bg-white text-slate-700 flex m-auto items-center justify-center"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
