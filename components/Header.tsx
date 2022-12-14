import React from "react";
import { ThemeSwitch } from "./micro_components/components";

type Props = {
  setIsDark: (isDark: boolean) => void;
  isDark: boolean;
};

function Header({ setIsDark, isDark }: Props) {
  return (
    <div className="flex items-center justify-between w-full h-20 p-4 text-gray-700 border-b border-gray-300 bg-slate-300 border-1 dark:bg-darkTheme dark:text-gray-200">
      <h1 className="text-lg">Academic Calendar</h1>
      <div className="flex gap-4">
        <ThemeSwitch
          className=""
          onClick={() => {
            setIsDark(!isDark);
            console.log("isDark: ", isDark);
          }}
        />
        <p className="items-center hidden text-sm md:flex">Home/Academic Calendar</p>
      </div>
    </div>
  );
}

export default Header;
