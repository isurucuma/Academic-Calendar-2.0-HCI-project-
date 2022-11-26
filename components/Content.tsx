import React from "react";
import Calendar from "./Calendar";
import Filters from "./Filters";
import Legend from "./Legend";

type Props = {};

function Content({}: Props) {
  return (
    <main className="w-[1400px] mx-auto my-12">
      <Filters />
      <div className="flex gap-10 overflow-auto">
        <Calendar />
        <Legend />
      </div>
    </main>
  );
}

export default Content;
