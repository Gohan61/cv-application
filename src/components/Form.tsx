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

  function newComponent(
    e: MouseEvent,
    component: string,
    componentId: string | undefined
  ) {
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
        [newId]: {
          company: "",
          position: "",
          responsibilities: { default: "" },
          startDate: "",
          endDate: "",
        },
      });
    }

    if (component === "responsibility" && componentId) {
      setPracticals({
        ...practicals,
        [componentId]: {
          ...practicals[componentId],
          responsibilities: {
            ...practicals[componentId].responsibilities,
            [newId]: "",
          },
        },
      });
    }
  }

  function deleteComponent(
    e: MouseEvent,
    id: string,
    state: { [key: string]: educationType | practicalType },
    setState: React.Dispatch<
      React.SetStateAction<{ [key: string]: educationType | practicalType }>
    >,
    respId: string | undefined
  ) {
    e.preventDefault();
    const copiedObject = { ...state };

    if (respId) {
      console.log(id);

      delete (copiedObject[id] as any).responsibilities[respId];

      setState(copiedObject);
    } else {
      delete copiedObject[id];

      setState(copiedObject);
    }
  }

  function submitForm(e: MouseEvent) {
    e.preventDefault();

    setEditStatus(true);
  }

  return (
    <form className="flex-initial" action="">
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
      <button
        className="text-lg p-2 mb-2 buttonDesign"
        onClick={(e) => newComponent(e, "education", undefined)}
      >
        + Educational experience
      </button>
      <Practical
        key={"default"}
        props={{ id: "default", practicals, setPracticals }}
        deleteComponent={deleteComponent}
        newComponent={newComponent}
      ></Practical>
      {Object.keys(practicals).length !== 1
        ? Object.keys(practicals).map((id: string) => {
            if (id !== "default") {
              return (
                <Practical
                  key={id}
                  props={{ id, practicals, setPracticals }}
                  deleteComponent={deleteComponent}
                  newComponent={newComponent}
                ></Practical>
              );
            }
          })
        : ""}
      <button
        className="text-lg p-2 buttonDesign"
        onClick={(e) => newComponent(e, "practical", undefined)}
      >
        + Practical experience
      </button>
      <br />
      <button className="editSubmitButton" onClick={(e) => submitForm(e)}>
        Submit
      </button>
    </form>
  );
}
