import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Practical from "./Practical";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";
import {
  EducationFormProps,
  PersonalFormProps,
  PracticalFormProps,
} from "../types/formTypes";

export default function Form({
  educationProps,
  practicalProps,
  personalProps,
  setEditStatus,
}: {
  educationProps: EducationFormProps;
  practicalProps: PracticalFormProps;
  personalProps: PersonalFormProps;
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { educations, setEducations } = educationProps;
  const { practicals, setPracticals } = practicalProps;
  const { personalInfo, setPersonalInfo } = personalProps;

  function newComponent(e: MouseEvent, component: string) {
    e.preventDefault();
    const newId = uuidv4();

    if (component === "education") {
      setEducations([...educations, newId]);
    }

    if (component === "practical") {
      setPracticals([...practicals, newId]);
    }
  }

  function deleteComponent(
    e: MouseEvent,
    id: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    e.preventDefault();
    const copiedArray = [...state];
    const index = copiedArray.indexOf(id);
    copiedArray.splice(index, 1);
    setState(copiedArray);
  }

  function submitForm(e: MouseEvent) {
    e.preventDefault();

    setEditStatus(true);
  }

  return (
    <form action="">
      <PersonalInfo
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      ></PersonalInfo>
      <Education props={undefined} deleteComponent={undefined}></Education>
      {educations.length !== 0
        ? educations.map((id: string) => {
            return (
              <Education
                key={id}
                props={{ id, educations, setEducations }}
                deleteComponent={deleteComponent}
              ></Education>
            );
          })
        : ""}
      <button onClick={(e) => newComponent(e, "education")}>
        + Educational experience
      </button>
      <Practical props={undefined} deleteComponent={undefined}></Practical>
      {practicals.length !== 0
        ? practicals.map((id: string) => {
            return (
              <Practical
                key={id}
                props={{ id, practicals, setPracticals }}
                deleteComponent={deleteComponent}
              ></Practical>
            );
          })
        : ""}
      <button onClick={(e) => newComponent(e, "practical")}>
        + Practical experience
      </button>
      <button onClick={(e) => submitForm(e)}>Submit</button>
    </form>
  );
}
