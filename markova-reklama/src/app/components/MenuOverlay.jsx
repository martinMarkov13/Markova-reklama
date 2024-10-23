import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <div className="bg-black">
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="font-bold" onClick={()=> setNavbarOpen(false)}>
          <NavLink  href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default MenuOverlay;
