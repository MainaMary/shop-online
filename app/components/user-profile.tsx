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
import { CiLogin } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { CurrentuserProps } from "@/types/types";
const UserProfile = ({ currentUser }: any) => {
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
      {isToggle && <UserMenu currentUser={currentUser} />}
      {isToggle && <Backdrop onClick={handleToggle} />}
    </>
  );
};

export default UserProfile;

export const UserMenu = ({ currentUser }: any) => {
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
      isProtected: true,
    },
    {
      label: "Admin dashboard",
      id: "2",
      path: "/admin",
      icon: <MdDashboard />,
      action: "",
      isProtected: true,
    },
    {
      label: "Logout",
      id: "3",
      path: "/logout",
      icon: <CiLogout />,
      action: handleLogOut,
      isProtected: false,
    },
  ];
  return (
    <div className="rounded-sm flex-col absolute shadow-md w-[180px] bg-white overflow-hidden right-[230px] top-16 text-[15px] flex  px-4 py-3 hover:bg-neutral-100 transition z-40 ">
      {currentUser?.email ? (
        menuItems.map((label) => (
          <div>
            <Link
              className="flex my-2 gap-3 h-auto items-center"
              href={label.path}
              key={label.id}
              onClick={handleLogOut}
            >
              <>
                <span>{label.icon}</span>
                <span>{label.label}</span>
              </>
            </Link>
            <hr />
          </div>
        ))
      ) : (
        <>
          <Link
            className="flex my-2 gap-3 h-auto items-center"
            href={"/auth/login"}
          >
            <CiLogin />
            <span>Login</span>
          </Link>
          <Link
            className="flex my-2 gap-3 h-auto items-center"
            href={"/auth/register"}
          >
            <FaRegCircleUser />
            <span>Register</span>
          </Link>
        </>
      )}
    </div>
  );
};
