import React from "react";
interface BProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BProps) => {
  return (
    <div
      onClick={onClick}
      className="z-20 h-screen w-screen bg-slate-300 opacity-50 top-0 fixed left-0"
    ></div>
  );
};

export default Backdrop;
