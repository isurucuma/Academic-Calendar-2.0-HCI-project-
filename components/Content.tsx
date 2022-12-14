import React from "react";
import Calendar from "./Calendar";
import Legend from "./Legend";

type Props = {};

function Content({}: Props) {
  return (
    <main>
      <div className="mx-5 my-12 ">
        <div className="flex justify-center gap-10 mx-auto">
          <Calendar />
          {/* <Legend /> */}
        </div>
      </div>
    </main>
  );
}

export default Content;
