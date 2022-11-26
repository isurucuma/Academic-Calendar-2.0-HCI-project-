import React, { FunctionComponent } from "react";

// meka ghanne komada bn :/
interface day {
  name: string;
  type: string;
  time: string;
}

interface week {
  monday?: day;
  tuesday?: day;
  wednesday?: day;
  thursday?: day;
  friday?: day;
}

interface Props {
  week: week[];
}
const WeekSummery: FunctionComponent<Props> = ({ week }: Props) => {
  const [loading, isLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
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
          <div className="flex items-center justify-center border-b border-gray-400 border-1">Monday</div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">Tuesday</div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">Wednesday</div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">Thursday</div>
          <div className="flex items-center justify-center border-b border-l border-gray-400 border-1">Friday</div>
          <div className="flex items-center justify-start h-20 p-3 text-sm border-gray-400 border-1">
            <div className="w-3 h-3 mx-3 bg-blue-500 rounded-full"></div>
            <div className="">
              <p> Applied algorithm </p>
              <p>Assignment - 2</p>
              <p>due at - 23.59</p>
            </div>
          </div>
          <div className="flex items-center justify-start h-20 p-3 border-l border-gray-400 border-1">
            {/* <div className="w-3 h-3 mx-3 bg-blue-500 rounded-full"></div>
            <div className="">
              <p> Applied algorithm </p>
              <p>Assignment - 2</p>
              <p>due at - 23.59</p>
            </div> */}
          </div>
          <div className="flex items-center justify-start h-20 p-3 border-l border-gray-400 border-1">
            <div className="w-3 h-3 mx-3 bg-yellow-500 rounded-full"></div>
            <div className="">
              <p> HCI Lab </p>
              <p>Lab - 4</p>
              <p>13.00 -16.00</p>
            </div>
          </div>
          <div className="flex items-center justify-start h-20 p-3 border-l border-gray-400 border-1">
            {/* <div className="w-3 h-3 mx-3 bg-blue-500 rounded-full"></div>
            <div className="">
              <p> Applied algorithm </p>
              <p>Assignment - 2</p>
              <p>due at - 23.59</p>
            </div> */}
          </div>
          <div className="flex items-center justify-start h-20 p-3 border-l border-gray-400 border-1">
            {/* <div className="w-3 h-3 mx-3 bg-blue-500 rounded-full"></div>
            <div className="">
              <p> Applied algorithm </p>
              <p>Assignment - 2</p>
              <p>due at - 23.59</p>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default WeekSummery;
