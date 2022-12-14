import React, { useState } from "react";
import Filters from "./Filters";
import DialogSelect from "./DropDownRes";
import WeekSummery from "./WeekSummery";

type Props = {};
const weeks = [
  { label: "week1" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week1" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
  { label: "week2" },
];

const data = [
  {
    monday: {
      name: "Applied algorithm",
      type: "Assignment - 2",
      time: "due at - 23.59",
    },

    wednesday: {
      name: "HCI Lab",
      type: "Lab - 4",
      time: "13.00 -16.00",
    },
  },
];

function Calendar({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [week, setWeek] = useState(0);
  const [index, setIndex] = useState(0);

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
              className="flex items-center h-8 col-span-4 bg-gray-200 border border-gray-300 rounded-md dark:text-gray-300 dark:bg-darkTheme border-1"
            >
              <div className="px-3">*</div>
              <p className="mx-auto">Holiday</p>{" "}
            </div>
            {clicked && index === i ? <WeekSummery {...{ weekNo: i + 1 }} /> : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
