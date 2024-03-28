import React from "react";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { IoMdDesktop } from "react-icons/io";
import { FiWatch } from "react-icons/fi";
import { RiProductHuntFill } from "react-icons/ri";
const menuItems = [
  {
    label: "All",
    id: "1",
    icon: <RiProductHuntFill />,
  },
  {
    label: "Phone",
    id: "2",
    icon: <IoMdPhonePortrait />,
  },
  {
    label: "Laptop",
    id: "3",
    icon: <FaLaptop />,
  },
  {
    label: "Desktop",
    id: "4",
    icon: <IoMdDesktop />,
  },
  {
    label: "Watch",
    id: "5",
    icon: <FiWatch />,
  },
];
const SideNav = () => {
  return (
    <div className="px-12">
      {menuItems.map(({ label, id, icon }) => (
        <p className="my-12 flex gap-2" key={id}>
          {icon}
          {label}
        </p>
      ))}
    </div>
  );
};

export default SideNav;
