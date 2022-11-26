import React, { useState, useEffect } from "react";

type Props = {};

function Legend({}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [type, setType] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY < 200) setScrolled(false);
      else setScrolled(true);
    });
    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY < 200) setScrolled(false);
        else setScrolled(true);
      });
    };
  }, []);
  return (
    <div
      className={`${scrolled ? "ease-in-out duration-300 fixed  top-[40px] translate-x-1/2" : ""}`}
      style={{ right: "calc(50% - 540px)" }}
    >
      <div className="w-[300px] p-8 border border-gray-300 rounded-2xl border-1  bg-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div> <p className="px-3">Assignment Deadlines</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div> <p className="px-3">Lab Schedules</p>
        </div>
        <div className="flex items-center ">
          <div className="w-4 h-4 bg-pink-500 rounded-full"></div> <p className="px-3">Other Deadlines</p>
        </div>
      </div>
    </div>
  );
}

export default Legend;
