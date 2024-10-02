import { useState } from "react";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Practical from "./Practical";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";

export default function Form() {
  const [educations, setEducations] = useState<string[]>([]);
  const [practicals, setPracticals] = useState<string[]>([]);

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

  return (
    <form action="">
      <PersonalInfo></PersonalInfo>
      <Education props={undefined} deleteComponent={undefined}></Education>
      {educations.length !== 0
        ? educations.map((id) => {
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
        ? practicals.map((id) => {
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
    </form>
  );
}
