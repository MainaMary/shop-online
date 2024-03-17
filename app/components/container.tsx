import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[1240px] m-auto md:px-2 px-4 xl:px-20">
      {children}
    </div>
  );
};
