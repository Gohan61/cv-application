import { useState } from "react";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Practical from "./Practical";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";

export default function Form() {
  const [educations, setEducations] = useState<string[]>([]);
  function newEducation(e: MouseEvent) {
    e.preventDefault();
    const newId = uuidv4();
    setEducations([...educations, newId]);
  }

  return (
    <form action="">
      <PersonalInfo></PersonalInfo>
      <Education props={""}></Education>
      {educations.length !== 0
        ? educations.map((id) => {
            return (
              <Education
                key={id}
                props={{ id, educations, setEducations }}
              ></Education>
            );
          })
        : ""}
      <button onClick={(e) => newEducation(e)}>+ Educational experience</button>
      <Practical></Practical>
    </form>
  );
}
