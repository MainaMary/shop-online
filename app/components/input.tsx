import React from "react";
interface InputProps {
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string;
}

const Input = ({ placeholder, type, id, className = "" }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      className={`block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
    />
  );
};

export default Input;
