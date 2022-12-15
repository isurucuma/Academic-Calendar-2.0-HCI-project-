export enum deadlineType {
  other,
  assignment,
  lab,
}

export interface deadline {
  department: string[];
  deadlineName: string;
  due: string;
  moduleName?: string;
  type: deadlineType;
}

export interface day {
  tasks?: deadline[];
}

export interface week {
  id: number;
  monday?: day;
  tuesday?: day;
  wednesday?: day;
  thursday?: day;
  friday?: day;
}

export interface filter {
  Batch: string;
  Year: string;
  Dept: string;
}

export type FilterContextType = {
  filters: filter;
  setFilters: React.Dispatch<React.SetStateAction<filter>>;
};
