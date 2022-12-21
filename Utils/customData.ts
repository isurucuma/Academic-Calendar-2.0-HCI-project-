import { week, deadlineType } from "./types";

export const WeekData: week[] = [
  {
    id: 1,
    weekType: null,
    monday: {
      tasks: [
        {
          department: ["Computer Engineering"],
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
          department: ["EEE"],
          deadlineName: "Assignment",
          due: "11:59pm",
          moduleName: "Data mining-EC0960",
          type: deadlineType.assignment,
        },
      ],
    },
    friday: {
      tasks: [
        {
          department: ["Computer Engineering", "EEE"],
          deadlineName: "Exam Registration",
          due: "11:59pm",
          type: deadlineType.other,
        },
      ],
    },
  },
  {
    id: 2,
    weekType: null,
    wednesday: {
      tasks: [
        {
          department: ["Computer Engineering"],
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
          department: ["Computer Engineering", "EEE"],
          deadlineName: "Assignment",
          due: "11:59pm",
          moduleName: "Data mining-EC0960",
          type: deadlineType.assignment,
        },
      ],
    },
  },
  {
    id: 3,
    weekType: null,
    monday: {
      tasks: [
        {
          department: ["Computer Engineering"],
          deadlineName: "Lab-03",
          due: "11:59pm",
          moduleName: "HCI-EC0950",
          type: deadlineType.lab,
        },
      ],
    },
  },
  {
    id: 8,
    weekType: null,
    monday: {
      tasks: [
        {
          department: ["Computer Engineering"],
          deadlineName: "HCI Exam",
          due: "10.00am",
          moduleName: "HCI-EC0950",
          type: deadlineType.other,
        },
      ],
    },
  },
];
