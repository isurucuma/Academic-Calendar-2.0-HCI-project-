import React, { Component, FunctionComponent } from "react";
import { day, deadlineType } from "../../Utils/types";

interface Props {
  day?: day;
}

const DaySummery: FunctionComponent<Props> = ({ day }: Props) => {
  return (
    <div>
      {day?.tasks &&
        day.tasks.map((item, index) => {
          let color = "bg-pink-500";
          if (item.type === deadlineType.assignment) {
            color = "bg-blue-500";
          }
          if (item.type === deadlineType.lab) {
            color = "bg-yellow-500";
          }
          return (
            <>
              <div className={`w-3 h-3 mx-3 ${color} rounded-full`}></div>
              <div className="">
                <p>{item.deadlineName}</p>
                <p>{item.due}</p>
                {item.moduleName ? <p>{item.moduleName}</p> : null}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default DaySummery;
