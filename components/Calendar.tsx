import React from "react";
import Filters from "./Filters";

type Props = {};

function Calendar({}: Props) {
  return (
    <div className="w-full">
      <Filters />
      <div className="grid grid-cols-6">
        <div className=" border border-1 border-black">3rd Jan</div>
        <div className=" border border-1 border-black">3rd Jan</div>
        <div className="col-span-4 border border-1 border-black">Holiday</div>
      </div>
    </div>
  );
}

export default Calendar;
