export enum deadlineType {
  other,
  assignment,
  lab,
}

export interface deadline {
  deadlineName: string;
  due: string;
  moduleName?: string;
  type: deadlineType;
}

export interface day {
  tasks?: deadline[];
}

export interface week {
  monday?: day;
  tuesday?: day;
  wednesday?: day;
  thursday?: day;
  friday?: day;
}
