import React, { FunctionComponent, useContext } from "react";
import { week, deadlineType } from "../Utils/types";
import { filterOn } from "./Content";
import DaySummery from "./micro_components/DaySummery";

interface Props {
  weekNo: number;
}

const WeekSummery: FunctionComponent<Props> = ({ weekNo }: Props) => {
  const filter = useContext(filterOn);

  const [loading, isLoading] = React.useState(true);
  const [weekData, setWeekData] = React.useState<week>({ id: 0, weekType: null });

  React.useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 1000);
    fetch(`http://192.168.8.103:3000/api/getWeekData/${weekNo}`)
      // fetch(`http://localhost:3000/api/getWeekData/${weekNo}`)
      .then((res) => res.json())
      .then((data: week) => {
        console.log(data);

        setWeekData(data);
        // isLoading(false);
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
        <div className="col-span-6">
          <div className="hidden col-span-6 md:block">
            <div className="grid grid-cols-5 col-span-6 px-3 py-4 duration-300 ease-in-out border border-black rounded-md dark:border-white border-1">
              <div className="flex items-center justify-center border-b border-gray-400 dark:text-white dark:border-white dark:bg-darkTheme border-1 text-truncate">
                Monday
              </div>
              <div className="flex items-center justify-center border-b border-l border-gray-400 dark:text-white dark:border-white dark:bg-darkTheme border-1">
                Tuesday
              </div>
              <div className="flex items-center justify-center border-b border-l border-gray-400 dark:text-white dark:border-white dark:bg-darkTheme border-1">
                Wednesday
              </div>
              <div className="flex items-center justify-center border-b border-l border-gray-400 dark:text-white dark:border-white dark:bg-darkTheme border-1">
                Thursday
              </div>
              <div className="flex items-center justify-center border-b border-l border-gray-400 dark:text-white dark:border-white dark:bg-darkTheme border-1">
                Friday
              </div>
              <div className="flex items-center justify-start p-3 text-sm border-gray-400 md:h-20 border-1">
                {weekData.tuesday?.tasks &&
                  weekData.tuesday.tasks.map((item, index) => {
                    let color = "bg-pink-500";
                    if (item.type === deadlineType.assignment) {
                      color = "bg-blue-500";
                    } else if (item.type === deadlineType.lab) {
                      color = "bg-yellow-500";
                    }
                    return (
                      <div key={index}>
                        <div className={` w-3 h-3 mx-3 ${color} rounded-full`}></div>
                        <div className="">
                          <p className="dark:text-white">{item.deadlineName}</p>
                          <p className="dark:text-white">{item.due}</p>
                          {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                        </div>
                      </div>
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
                      <div key={index}>
                        <div className={` w-3 h-3 mx-3 ${color} rounded-full`}></div>
                        <div className="">
                          <p className="dark:text-white">{item.deadlineName}</p>
                          <p className="dark:text-white">{item.due}</p>
                          {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="flex items-center justify-start h-20 p-3 text-sm border-l border-gray-400 border-1">
                {weekData.wednesday?.tasks &&
                  weekData.wednesday.tasks.map((item, index) => {
                    let color = "bg-pink-500";
                    if (item.type === deadlineType.assignment) {
                      color = "bg-blue-500";
                    } else if (item.type === deadlineType.lab) {
                      color = "bg-yellow-500";
                    }
                    return (
                      <div key={index}>
                        <div className={` w-3 h-3 mx-3 ${color} rounded-full`}></div>
                        <div className="">
                          <p className="dark:text-white">{item.deadlineName}</p>
                          <p className="dark:text-white">{item.due}</p>
                          {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                        </div>
                      </div>
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
                      <div key={index}>
                        <div className={` w-3 h-3 mx-3 ${color} rounded-full`}></div>
                        <div className="">
                          <p className="dark:text-white">{item.deadlineName}</p>
                          <p className="dark:text-white">{item.due}</p>
                          {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                        </div>
                      </div>
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
                      <div key={index}>
                        <div className={` w-3 h-3 mx-3 ${color} rounded-full`}></div>
                        <div className="">
                          <p className="dark:text-white">{item.deadlineName}</p>
                          <p className="dark:text-white">{item.due}</p>
                          {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div
              className={`grid col-span-6 grid-rows-${
                Object.keys(weekData).length - 1
              } px-3 py-4 duration-300 ease-in-out border border-black dark:border-white rounded-md border-1`}
            >
              {weekData.monday?.tasks && (
                <div className="grid items-center justify-center grid-cols-6 pb-2 border-b border-gray-400 border-1">
                  <p className="justify-start col-span-2 p-2 text-sm border-r border-gray-400 border-1 dark:text-white">
                    Monday
                  </p>
                  <div className="flex items-center justify-start text-sm ">
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
                          <div key={index} className="flex items-center gap-3 px-2">
                            <div className={`w-3 h-3 mx-3 ${color} rounded-full`}></div>
                            <div className="">
                              <p className="dark:text-white">{item.deadlineName}</p>
                              <p className="dark:text-white">{item.due}</p>
                              {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
              {weekData.tuesday?.tasks && (
                <div className="grid items-center justify-center grid-cols-6 py-2 border-b border-gray-400 border-1">
                  <p className="justify-start col-span-2 p-2 text-sm border-r border-gray-400 border-1 dark:text-white">
                    Tuesday
                  </p>
                  <div className="flex items-center justify-start text-sm ">
                    {/* <DaySummery {...weekData.tuesday.tasks} /> */}

                    {weekData.tuesday?.tasks &&
                      weekData.tuesday.tasks.map((item, index) => {
                        let color = "bg-pink-500";
                        if (item.type === deadlineType.assignment) {
                          color = "bg-blue-500";
                        } else if (item.type === deadlineType.lab) {
                          color = "bg-yellow-500";
                        }
                        return (
                          <div key={index} className="flex items-center gap-3 px-2">
                            <div className={`w-3 h-3 mx-3 ${color} rounded-full`}></div>
                            <div className="">
                              <p className="dark:text-white">{item.deadlineName}</p>
                              <p className="dark:text-white">{item.due}</p>
                              {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
              {weekData.wednesday?.tasks && (
                <div className="grid items-center justify-center grid-cols-6 py-2 border-b border-gray-400 border-1">
                  <p className="justify-start col-span-2 p-2 text-sm border-r border-gray-400 border-1 dark:text-white">
                    Wednesday
                  </p>
                  <div className="flex items-center justify-start text-sm ">
                    {weekData.wednesday?.tasks &&
                      weekData.wednesday.tasks.map((item, index) => {
                        let color = "bg-pink-500";
                        if (item.type === deadlineType.assignment) {
                          color = "bg-blue-500";
                        } else if (item.type === deadlineType.lab) {
                          color = "bg-yellow-500";
                        }
                        return (
                          <div key={index} className="flex items-center gap-3 px-2">
                            <div className={`w-3 h-3 mx-3 ${color} rounded-full`}></div>
                            <div className="">
                              <p className="dark:text-white">{item.deadlineName}</p>
                              <p className="dark:text-white">{item.due}</p>
                              {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
              {weekData.thursday?.tasks && (
                <div className="grid items-center justify-center grid-cols-6 py-2 border-b border-gray-400 border-1">
                  <p className="justify-start col-span-2 p-2 text-sm border-r border-gray-400 border-1 dark:text-white">
                    Thursday
                  </p>

                  <div className="flex items-center justify-start text-sm ">
                    {weekData.thursday?.tasks &&
                      weekData.thursday.tasks.map((item, index) => {
                        let color = "bg-pink-500";
                        if (item.type === deadlineType.assignment) {
                          color = "bg-blue-500";
                        } else if (item.type === deadlineType.lab) {
                          color = "bg-yellow-500";
                        }
                        return (
                          <div key={index} className="flex items-center gap-3 px-2">
                            <div className={`w-3 h-3 mx-3 ${color} rounded-full`}></div>
                            <div className="">
                              <p className="dark:text-white">{item.deadlineName}</p>
                              <p className="dark:text-white">{item.due}</p>
                              {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
              {weekData.friday?.tasks && (
                <div className="grid items-center justify-center grid-cols-6 pt-2 border-gray-400 border-1 ">
                  <p className="justify-start col-span-2 p-2 text-sm border-r border-gray-400 border-1 dark:text-white">
                    Friday
                  </p>

                  <div className="flex items-center justify-start text-sm ">
                    {weekData.friday?.tasks &&
                      weekData.friday.tasks.map((item, index) => {
                        let color = "bg-pink-500";
                        if (item.type === deadlineType.assignment) {
                          color = "bg-blue-500";
                        } else if (item.type === deadlineType.lab) {
                          color = "bg-yellow-500";
                        }
                        return (
                          <div key={index} className="flex items-center gap-3 px-2">
                            <div className={`w-3 h-3 mx-3 ${color} rounded-full`}></div>
                            <div className="">
                              <p className="dark:text-white">{item.deadlineName}</p>
                              <p className="dark:text-white">{item.due}</p>
                              {item.moduleName ? <p className="dark:text-white">{item.moduleName}</p> : null}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeekSummery;
