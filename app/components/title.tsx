import React from "react";
interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return (
    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {children}
    </h2>
  );
};

export default Title;
