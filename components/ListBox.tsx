import { Fragment, FunctionComponent, useState, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { filterOn } from "./Content";
interface Item {
  name: string;
  value: string;
}

interface Props {
  label: string;
  items: Item[];
}

const FilterList: FunctionComponent<Props> = ({ items, label }: Props) => {
  const [selected, setSelected] = useState(items[0]);
  const context = useContext(filterOn);
  console.log(context.filters);
  // console.log(selected);

  const handleChange = (selected: any) => {
    setSelected(selected);
    if (label === "Batch") {
      context.setFilters({
        ...context.filters,
        Batch: selected.value.toString(),
      });
    } else if (label === "Year") {
      context.setFilters({
        ...context.filters,
        Year: selected.value.toString(),
      });
    } else {
      context.setFilters({
        ...context.filters,
        Dept: selected.value.toString(),
      });
    }

    // location.reload();
  };
  return (
    <div className="w-56">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mb-2">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-400 rounded-lg shadow-md cursor-default dark:bg-darkTheme focus:outline-none focus-visible:border-indigo-500 dark:border-gray-200 border-1 dark:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default FilterList;
