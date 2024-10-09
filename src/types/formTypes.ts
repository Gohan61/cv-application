export interface personalInfoType {
  name: string | undefined;
  email: string | undefined;
  phoneNumber: number | undefined;
}

export type educationType = {
  [key: string]: {
    school: string | undefined;
    study: string | undefined;
    graduation: string | undefined;
  };
};

export interface practicalType {
  [key: string]: {
    company: string | undefined;
    position: string | undefined;
    responsibilities: responsibility;
    startDate: string | undefined;
    endDate: string | undefined;
  };
}

type responsibility = { [key: string]: string };

type AppComponentProps<
  T extends object,
  K extends string,
  SetterKey extends string,
> = {
  [key in K]: T;
} & {
  [setState in SetterKey]: React.Dispatch<React.SetStateAction<T>>;
};

export type EducationFormProps = AppComponentProps<
  educationType,
  "educations",
  "setEducations"
>;

export type PracticalFormProps = AppComponentProps<
  practicalType,
  "practicals",
  "setPracticals"
>;

export type PersonalFormProps = AppComponentProps<
  personalInfoType,
  "personalInfo",
  "setPersonalInfo"
>;

export type EducationProps = {
  id: string;
  educations: educationType;
  setEducations: React.Dispatch<React.SetStateAction<educationType>>;
};

export type PracticalProps = {
  id: string;
  practicals: practicalType;
  setPracticals: React.Dispatch<React.SetStateAction<practicalType>>;
};
