import React from "react";
const menuItems = [
  {
    label: "All",
    id: "1",
  },
  {
    label: "Phone",
    id: "2",
  },
  {
    label: "Laptop",
    id: "3",
  },
  {
    label: "Desktop",
    id: "4",
  },
  {
    label: "Watch",
    id: "5",
  },
];
const SideNav = () => {
  return (
    <div className="px-12">
      {menuItems.map(({ label, id }) => (
        <p className="my-4" key={id}>
          {label}
        </p>
      ))}
    </div>
  );
};

export default SideNav;
