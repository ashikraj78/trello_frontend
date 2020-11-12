import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

export default function UserDropdown({ handleLogout }) {
  let context = useContext(UserContext);
  return (
    <div
      className="py-1 rounded-md bg-white shadow-xs"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
      >
        {context.user.name}
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
      >
        Settings
      </a>
      <NavLink
        to="/"
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
        onClick={() => context.setUser(null)}
      >
        Sign out
      </NavLink>
    </div>
  );
}
