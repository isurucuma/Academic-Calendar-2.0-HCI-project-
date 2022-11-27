import { week, deadlineType } from "./types";

export const WeekData: week = {
  monday: {
    tasks: [
      {
        deadlineName: "Lab-03",
        due: "11:59pm",
        moduleName: "HCI-EC0950",
        type: deadlineType.lab,
      },
    ],
  },
  tuesday: {
    tasks: [
      {
        deadlineName: "Assignment",
        due: "11:59pm",
        moduleName: "Datamining-EC0960",
        type: deadlineType.assignment,
      },
    ],
  },
  friday: {
    tasks: [
      {
        deadlineName: "Exam Registration",
        due: "11:59pm",
        type: deadlineType.other,
      },
    ],
  },
};
