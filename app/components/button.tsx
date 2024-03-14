import React, { ReactNode } from "react";
import { IconType } from "react-icons";
interface BtnProps {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  icon?: ReactNode;
}

const Button = ({ children, onClick, outline, disabled, icon }: BtnProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full border-slate-600 rounded-md text-center hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed transition flex m-auto items-center h-auto py-4 px-3 justify-center
      ${outline ? "bg-white" : "bg-rose-500"}
      ${outline ? "text-rose-500" : "text-white"}
      `}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
