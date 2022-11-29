import React, { useState } from "react";
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
    <div className="max-w-[1050px] w-[1050px] mb-12">
      <div className="grid grid-cols-6 gap-4">
        {weeks.map((val, i) => (
          <>
            <div className="flex items-center h-8 bg-gray-200 border border-gray-300 rounded-md border-1">
              <p className="mx-auto">3rd Jan</p>
            </div>
            <div className="flex items-center h-8 bg-gray-200 border border-gray-300 rounded-md border-1">
              <p className="mx-auto">3rd Jan</p>
            </div>
            <div
              onClick={() => {
                setClicked(true);
                setWeek(week);
                setIndex(i);
              }}
              className="flex items-center h-8 col-span-4 bg-gray-200 border border-gray-300 rounded-md border-1"
            >
              <div className="px-3">*</div>
              <p className="mx-auto">Holiday</p>{" "}
            </div>
            {clicked && index === i ? (
              <WeekSummery {...{ weekNo: i + 1 }} />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
