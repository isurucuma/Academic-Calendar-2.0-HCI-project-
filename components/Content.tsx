import React, { createContext, useState } from "react";
import { filter, FilterContextType } from "../Utils/types";
import Calendar from "./Calendar";
import Legend from "./Legend";

const filterContext = {
  filters: {
    Batch: "E18",
    Year: "2022",
    Dept: "Computer Engineering",
  },
  setFilters: () => {},
};

export const filterOn = createContext<FilterContextType>(filterContext);

type Props = {};

function Content({}: Props) {
  const [filters, setFilters] = useState<filter>({
    Batch: "E18",
    Year: "2022",
    Dept: "Computer Engineering",
  });

  return (
    <main>
      <div className="mx-5 my-12 ">
        <div className="flex justify-center gap-10 mx-auto">
          <filterOn.Provider value={{ filters, setFilters }}>
            <Calendar />
          </filterOn.Provider>

          {/* <Legend /> */}
        </div>
      </div>
    </main>
  );
}

export default Content;
