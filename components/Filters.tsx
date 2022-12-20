import React from "react";
import DropDown from "./DropDown";
import FilterList from "./ListBox";

type Props = {};

function Filters({}: Props) {
  return (
    <>
      <div className="items-center justify-center w-full gap-4 mx-auto md:flex ">
        <FilterList
          items={[
            { name: "2023", value: "2023" },
            { name: "2022", value: "2022" },
            { name: "2021", value: "2021" },
            { name: "2020", value: "2020" },
            { name: "2019", value: "2019" },
          ]}
          label={"Year"}
        />
        <FilterList
          items={[
            { name: "E18", value: "E18" },
            { name: "E19", value: "E19" },
            { name: "E20", value: "E20" },
            { name: "E21", value: "E21" },
            { name: "E22", value: "E22" },
          ]}
          label={"Batch"}
        />
        <FilterList
          items={[
            { name: "Common", value: "Common" },
            { name: "Computer Engineering", value: "Computer Engineering" },
            { name: "EEE", value: "EEE" },
            { name: "Civil Engineering", value: "Civil Engineering" },
            { name: "Inter Disciplinary Studies", value: "Inter Disciplinary Studies" },
          ]}
          label={"Dept"}
        />
      </div>
    </>
  );
}

export default Filters;
