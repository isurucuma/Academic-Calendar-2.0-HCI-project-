import React, { FunctionComponent } from "react";
import { week, deadlineType } from "../Utils/types";

interface Props {}

const WeekSummery: FunctionComponent<Props> = ({}: Props) => {
  const [loading, isLoading] = React.useState(true);
  const [weekData, setWeekData] = React.useState<week>({});

  React.useEffect(() => {
    // setTimeout(() => {
    //   isLoading(false);
    // }, 2000);
    fetch("http://localhost:3000/api/getWeekData")
      .then((res) => res.json())
      .then((data: week) => {
        console.log(data);
        setWeekData(data);
        isLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex col-span-6 space-x-4 animate-pulse">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div className="flex-1 py-1 space-y-6">
            <div className="h-2 bg-gray-400 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-2 bg-gray-400 rounded"></div>
                <div className="h-2 col-span-1 bg-gray-400 rounded"></div>
              </div>
              <div className="h-2 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 col-span-6 px-3 py-4 duration-300 ease-in-out border border-black rounded-md border-1">
          <div className="flex items-center justify-center border-b border-gray-400 border-1">
            Monday
          </div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">
            Tuesday
          </div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">
            Wednesday
          </div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">
            Thursday
          </div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">
            Friday
          </div>

          <div className="flex items-center justify-start h-20 p-3 text-sm border-gray-400 border-1">
            {weekData.tuesday?.tasks &&
              weekData.tuesday.tasks.map((item, index) => {
                let color = "bg-pink-500";
                if (item.type === deadlineType.assignment) {
                  color = "bg-blue-500";
                } else if (item.type === deadlineType.lab) {
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
          <div className="flex items-center justify-start h-20 p-3 text-sm border-l border-gray-400 border-1">
            {weekData.monday?.tasks &&
              weekData.monday.tasks.map((item, index) => {
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
          <div className="flex items-center justify-start h-20 text-sm p-3 border-l border-gray-400 border-1">
            {weekData.wednesday?.tasks &&
              weekData.wednesday.tasks.map((item, index) => {
                let color = "bg-pink-500";
                if (item.type === deadlineType.assignment) {
                  color = "bg-blue-500";
                } else if (item.type === deadlineType.lab) {
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
          <div className="flex items-center justify-start h-20 p-3 text-sm border-l border-gray-400 border-1">
            {weekData.thursday?.tasks &&
              weekData.thursday.tasks.map((item, index) => {
                let color = "bg-pink-500";
                if (item.type === deadlineType.assignment) {
                  color = "bg-blue-500";
                } else if (item.type === deadlineType.lab) {
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
          <div className="flex items-center justify-start h-20 p-3 text-sm border-l border-gray-400 border-1">
            {weekData.friday?.tasks &&
              weekData.friday.tasks.map((item, index) => {
                let color = "bg-pink-500";
                if (item.type === deadlineType.assignment) {
                  color = "bg-blue-500";
                } else if (item.type === deadlineType.lab) {
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
        </div>
      )}
    </>
  );
};

export default WeekSummery;
