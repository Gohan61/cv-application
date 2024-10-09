import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Practical from "./Practical";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";
import {
  EducationFormProps,
  educationType,
  PersonalFormProps,
  PracticalFormProps,
  practicalType,
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
      setEducations({
        ...educations,
        [newId]: { school: "", study: "", graduation: "" },
      });
    }

    if (component === "practical") {
      setPracticals({
        ...practicals,
        [newId]: { company: "", position: "", startDate: "", endDate: "" },
      });
    }
  }

  function deleteComponent(
    e: MouseEvent,
    id: string,
    state: { [key: string]: educationType | practicalType },
    setState: React.Dispatch<
      React.SetStateAction<{ [key: string]: educationType | practicalType }>
    >
  ) {
    e.preventDefault();
    const copiedObject = { ...state };
    delete copiedObject[id];
    console.log(copiedObject);

    setState(copiedObject);
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
      <Education
        props={{ id: "default", educations, setEducations }}
        deleteComponent={undefined}
      ></Education>
      {Object.keys(educations).length !== 1
        ? Object.keys(educations).map((id: string) => {
            if (id !== "default") {
              return (
                <Education
                  key={id}
                  props={{ id, educations, setEducations }}
                  deleteComponent={deleteComponent}
                ></Education>
              );
            }
          })
        : ""}
      <button onClick={(e) => newComponent(e, "education")}>
        + Educational experience
      </button>
      <Practical
        props={{ id: "default", practicals, setPracticals }}
        deleteComponent={undefined}
      ></Practical>
      {Object.keys(practicals).length !== 1
        ? Object.keys(practicals).map((id: string) => {
            if (id !== "default") {
              return (
                <Practical
                  key={id}
                  props={{ id, practicals, setPracticals }}
                  deleteComponent={deleteComponent}
                ></Practical>
              );
            }
          })
        : ""}
      <button onClick={(e) => newComponent(e, "practical")}>
        + Practical experience
      </button>
      <button onClick={(e) => submitForm(e)}>Submit</button>
    </form>
  );
}
