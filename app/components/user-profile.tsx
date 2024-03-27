"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import Backdrop from "./backdrop";
import { signOut } from "next-auth/react";

const UserProfile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <>
      <div
        className="flex cursor-pointer bg-white p-2 rounded-md gap-4 h-auto items-center relative"
        onClick={handleToggle}
      >
        <FaUser />
        <p>Account</p>
        {isToggle ? (
          <IoMdArrowDropup size={20} />
        ) : (
          <IoMdArrowDropdown size={20} />
        )}
      </div>
      {isToggle && <UserMenu />}
      {isToggle && <Backdrop onClick={handleToggle} />}
    </>
  );
};

export default UserProfile;

export const UserMenu = () => {
  const handleLogOut = () => {
    signOut();
  };
  const menuItems = [
    {
      label: "Your orders",
      id: "1",
      path: "/orders",
      icon: <FaShoppingBasket />,
      action: "",
    },
    {
      label: "Admin dashboard",
      id: "2",
      path: "/admin",
      icon: <MdDashboard />,
      action: "",
    },
    {
      label: "Logout",
      id: "3",
      path: "/logout",
      icon: <CiLogout />,
      action: handleLogOut,
    },
  ];
  return (
    <div className="rounded-sm flex-col absolute shadow-md w-[180px] bg-white overflow-hidden right-[230px] top-16 text-[15px] flex  px-4 py-3 hover:bg-neutral-100 transition z-40 ">
      {menuItems.map((label) => (
        <Link
          className="flex my-2 gap-3 h-auto items-center"
          href={label.path}
          key={label.id}
          onClick={handleLogOut}
        >
          <span>{label.icon}</span>
          <span>{label.label}</span>
        </Link>
      ))}
    </div>
  );
};
