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

export interface EducationProps {
  id: string;
  educations: string[];
  setEducations: React.Dispatch<React.SetStateAction<string[]>>;
}
