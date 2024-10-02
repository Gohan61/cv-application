export interface personalInfoType {
  name: string | undefined;
  email: string | undefined;
  phoneNumber: number | undefined;
}

export interface educationType {
  school: string | undefined;
  study: string | undefined;
  graduation: string | undefined;
}

export interface practicalType {
  company: string | undefined;
  position: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
}

export type responsibilityType = string | undefined;

type FormComponentProps<T, K extends string, SetterKey extends string> = {
  [key in K]: T[];
} & {
  [setState in SetterKey]: React.Dispatch<React.SetStateAction<T[]>>;
} & {
  id: string;
};

export type EducationProps = FormComponentProps<
  string,
  "educations",
  "setEducations"
>;

export type PracticalProps = FormComponentProps<
  string,
  "practicals",
  "setPracticals"
>;
