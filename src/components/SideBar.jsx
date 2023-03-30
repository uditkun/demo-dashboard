import React from "react";
import { useState } from "react";

const menu = [
  "dashboard",
  "work permits",
  "areas",
  "projects",
  "users",
  "reports",
  "profile",
];

const SideBar = () => {
  const [menuItemActive, setMenuItemActive] = useState(menu[0]);
  // For a production level app, this state value can be set to router query
  return (
    <div className="max-w-[240px] w-full min-h-screen bg-dashboardBG flex flex-col text-textWhite capitalize relative z-50">
      <div className="flex justify-center items-center py-8 mx-auto">
        <img className="w-full h-auto" src="/icons/Logo.svg" alt="logo" />
      </div>
      <ul className="flex flex-col gap-8">
        {menu.map((menuItem) => {
          return (
            <li
              key={menuItem}
              className={`flex gap-2 pt-2 pb-4 pl-[23.33%] hover:cursor-pointer ${
                menuItemActive === menuItem && "bg-dashboardItem"
              }`}
              onClick={() => {
                setMenuItemActive(menuItem);
              }}
            >
              <span>
                <img
                  className="w-fit mr-1"
                  src="icons/briefcase.svg"
                  alt="projectName"
                />
              </span>
              {menuItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
