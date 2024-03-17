import React from "react";
interface Props {
  children: string;
}
const Label = ({ children }: Props) => {
  return (
    <label
      htmlFor="input"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
};

export default Label;
