import React from "react";
import Calendar from "./Calendar";
import Legend from "./Legend";

type Props = {};

function Content({}: Props) {
  return (
    <main className="flex flex-row">
      <Calendar />
      <Legend />
    </main>
  );
}

export default Content;
