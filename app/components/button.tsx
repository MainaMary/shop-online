import { ClassNames } from "@emotion/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
interface BtnProps {
  children: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  icon?: ReactNode;
  name?: string;
  type?: "submit" | "reset";
  className?: string;
}

const Button = ({
  children,
  name,
  onClick,
  outline,
  disabled,
  icon,
  type,
  className = "",
}: BtnProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      name={name}
      type={type}
      className={`w-full border-slate-600 rounded-md text-center hover:opacity-80  transition flex m-auto items-center h-auto py-2 px-3 justify-center
      ${outline ? "bg-white" : "bg-rose-500"}
      ${outline ? "text-rose-500" : "text-white"}
      ${className}
      `}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
