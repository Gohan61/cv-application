import { educationType } from "../types/formTypes";
import { useState } from "react";
import { MouseEvent } from "react";
import { EducationProps } from "../types/formTypes";

export default function Education({
  props,
}: { props: EducationProps } | { props: string }) {
  const [educationInfo, setEducationInfo] = useState<educationType>({
    school: undefined,
    study: undefined,
    graduation: undefined,
  });

  function deleteEducation(e: MouseEvent) {
    e.preventDefault();
    const removedEducation = [...props.educations];
    const index = removedEducation.indexOf(props.id);
    removedEducation.splice(index, 1);
    props.setEducations(removedEducation);
  }

  return (
    <fieldset>
      <legend>Educational experience</legend>
      <label htmlFor="school">Educational institution: </label>
      <input
        type="text"
        id="school"
        name="school"
        value={educationInfo.school}
        onChange={(e) =>
          setEducationInfo({ ...educationInfo, school: e.target.value })
        }
      />
      <label htmlFor="study">Title of degree: </label>
      <input
        type="text"
        id="study"
        name="study"
        value={educationInfo.study}
        onChange={(e) =>
          setEducationInfo({ ...educationInfo, study: e.target.value })
        }
      />
      <label htmlFor="graduation">Year of graduation: </label>
      <input
        type="date"
        id="graduation"
        name="graduation"
        value={educationInfo.graduation}
        onChange={(e) =>
          setEducationInfo({ ...educationInfo, graduation: e.target.value })
        }
      />
      {props.id ? (
        <button onClick={(e) => deleteEducation(e)}>
          Delete Educational Experience
        </button>
      ) : (
        ""
      )}
    </fieldset>
  );
}
