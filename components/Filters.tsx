import React from "react";
import DropDown from "./DropDown";

type Props = {};

function Filters({}: Props) {
  return (
    <>
      <div className="flex items-center gap-4 px-12 m-4">
        <div className="flex items-center justify-center h-10 border border-black rounded-md w-[15rem] border-1 mr-28">
          Dates
        </div>
        <DropDown
          items={[
            { name: "2023", value: "2023" },
            { name: "2022", value: "2022" },
            { name: "2021", value: "2021" },
            { name: "2020", value: "2020" },
            { name: "2019", value: "2019" },
          ]}
          label={"Year"}
        />
        <DropDown
          items={[
            { name: "E18", value: "E18" },
            { name: "E19", value: "E19" },
            { name: "E20", value: "E20" },
            { name: "E21", value: "E21" },
            { name: "E22", value: "E22" },
          ]}
          label={"Batch"}
        />
        <DropDown
          items={[
            { name: "Computer Engineering", value: "Computer Engineering" },
            { name: "EEE", value: "EEE" },
            { name: "Civil Engineering", value: "Civil Engineering" },
            { name: "Inter Disciplinary Studies", value: "Inter disciplinary Studies" },
          ]}
          label={"Department"}
        />
      </div>
    </>
  );
}

export default Filters;