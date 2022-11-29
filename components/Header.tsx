import React from "react";
import { ThemeSwitch } from "./micro_components/components";

type Props = {
  setIsDark: (isDark: boolean) => void;
  isDark: boolean;
};

function Header({ setIsDark, isDark }: Props) {
  return (
    <div className="h-20 p-4 w-full items-center bg-slate-300 dark:bg-slate-900 flex flex-row justify-between text-gray-700 dark:text-gray-200">
      <h1 className="text-lg">Academic Calendar</h1>
      <p className="text-sm">Home/Academic Calendar</p>
      <ThemeSwitch
        className="absolute top-3 right-4"
        onClick={() => {
          setIsDark(!isDark);
          console.log("isDark: ", isDark);
        }}
      />
    </div>
  );
}

export default Header;
