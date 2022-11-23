import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="h-20 p-4 items-center bg-slate-300 flex flex-row justify-between text-gray-700">
      <h1 className="text-lg">Academic Calendar</h1>
      <p className="text-sm">Home/Academic Calendar</p>
    </div>
  );
}

export default Header;
