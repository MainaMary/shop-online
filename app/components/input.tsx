import React from "react";
interface InputProps {
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string;

  onChange?: (x: any) => void;
  value?: string | number;
  errors?: any;
}

const Input = ({
  placeholder,
  type,

  onChange,
  id,
  className = "",
  value,
  errors,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`block w-full p-2 text-gray-900 border  rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
       
       ${className}`}
    />
  );
};

export default Input;
//${errors ? "border-rose-400" : "border-gray-300"}
