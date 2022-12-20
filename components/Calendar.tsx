import React, { useState } from "react";
import { addYears } from "date-fns";

import Filters from "./Filters";
import DialogSelect from "./DropDownRes";
import WeekSummery from "./WeekSummery";

type Props = {};
const weeks = [
  { label: "week 1" },
  { label: "week 2" },
  { label: "week 3" },
  { label: "week 4" },
  { label: "week 5" },
  { label: "week 6" },
  { label: "week 7" },
  { label: "Mid exam" },
  { label: "week 9" },
  { label: "week 10" },
  { label: "week 11" },
  { label: "week 12" },
  { label: "week 13" },
  { label: "week 14" },
  { label: "Study leave" },
  { label: "Examination" },
  { label: "Vacation" },
  { label: "week 1" },
  { label: "week 2" },
  { label: "week 3" },
  { label: "week 4" },
  { label: "week 5" },
  { label: "week 6" },
  { label: "week 7" },
  { label: "Mid exam" },
  { label: "week 9" },
  { label: "week 10" },
  { label: "week 11" },
  { label: "week 12" },
  { label: "week 13" },
  { label: "week 14" },
  { label: "Study leave" },
  { label: "Examination" },
  { label: "Vacation" },
  { label: "week 1" },
  { label: "week 2" },
  { label: "week 3" },
  { label: "week 4" },
  { label: "week 5" },
  { label: "week 6" },
  { label: "week 7" },
  { label: "Mid exam" },
  { label: "week 9" },
  { label: "week 10" },
  { label: "week 11" },
  { label: "week 12" },
  { label: "week 13" },
  { label: "week 14" },
  { label: "Study leave" },
  { label: "Examination" },
  { label: "Vacation" },
];

function Calendar({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [week, setWeek] = useState(0);
  const [index, setIndex] = useState(0);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  // const date = new Date();
  // console.log(date);

  // const year = addYears(date, 1);
  // console.log(year);

  // function getWeeksDiff(startDate, endDate) {
  //   const msInWeek = 1000 * 60 * 60 * 24 * 7;

  //   return Math.round(Math.abs(endDate - startDate) / msInWeek);
  // }

  // console.log(getWeeksDiff(date, year));

  return (
    <div className="max-w-[1200px] mb-12 ">
      <div className="flex items-center justify-center gap-4 mb-6 ">
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full min-w-2"></div>{" "}
          <p className="px-3 text-sm dark:text-white md:text-md">Assignment Deadlines</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
          <p className="px-3 text-sm dark:text-white md:text-md">Lab Schedules</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>{" "}
          <p className="px-3 text-sm dark:text-white md:text-md">Other Deadlines</p>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="flex items-center col-span-2 mb-4">
          <div className="dark:text-white dark:border-white flex items-center justify-center h-10 border border-black rounded-md w-[12rem] border-1 mx-auto">
            Dates
          </div>
        </div>
        <div className="justify-between hidden col-span-4 mb-2 lg:max-[2000px]:flex">
          <Filters />
        </div>
        <div className="justify-center flex col-span-4 mb-2 lg:max-[2000px]:hidden text-gray-400">
          <DialogSelect />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-1 sm:gap-2 md:gap-4 max-w-[1224px]">
        {weeks.map((val, i) => (
          <>
            <div className="flex items-center h-8 text-sm bg-gray-200 border border-gray-300 rounded-md dark:text-gray-300 dark:bg-darkTheme border-1 md:text-md">
              <p className="mx-auto">3rd Jan</p>
            </div>
            <div className="flex items-center h-8 text-sm bg-gray-200 border border-gray-300 rounded-md dark:text-gray-300 dark:bg-darkTheme border-1 md:text-md">
              <p className="mx-auto">3rd Jan</p>
            </div>
            <div
              onClick={() => {
                setClicked(true);
                setWeek(week);
                setIndex(i);
              }}
              className={classNames(
                val.label === "Vacation" && "bg-green-200",
                val.label === "Examination" && "bg-red-200",
                val.label === "Mid exam" && "bg-red-200",
                val.label === "Study leave" && "bg-orange-200",
                "flex items-center h-8 col-span-4 bg-gray-200 border border-gray-300 rounded-md dark:text-gray-300 dark:bg-darkTheme border-1"
              )}
            >
              <div className="px-3">*</div>
              <p className="mx-auto cursor-pointer">{val.label}</p>{" "}
            </div>
            {clicked && index === i ? <WeekSummery {...{ weekNo: i + 1 }} /> : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
