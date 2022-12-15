import { week, deadlineType } from "./types";

export const WeekData: week[] = [
  {
    id: 1,
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
    friday: {
      tasks: [
        {
          department: ["Common"],
          deadlineName: "Exam Registration",
          due: "11:59pm",
          type: deadlineType.other,
        },
      ],
    },
  },
  {
    id: 3,
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
    thursday: {
      tasks: [
        {
          department: ["Computer Engineering"],
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
          department: ["Computer Engineering"],
          deadlineName: "Exam Registration",
          due: "11:59pm",
          type: deadlineType.other,
        },
      ],
    },
  },
  {
    id: 4,
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
    friday: {
      tasks: [
        {
          department: ["Computer Engineering"],
          deadlineName: "Exam Registration",
          due: "11:59pm",
          type: deadlineType.other,
        },
      ],
    },
  },
  {
    id: 5,
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
          department: ["Computer Engineering"],
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
          department: ["Computer Engineering"],
          deadlineName: "Exam Registration",
          due: "11:59pm",
          type: deadlineType.other,
        },
      ],
    },
  },
];
