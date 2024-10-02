import { educationType } from "../types/formTypes";
import { useState } from "react";
import { EducationProps } from "../types/formTypes";

export default function Education({
  props,
  deleteComponent,
}:
  | { props: EducationProps; deleteComponent: Function }
  | { props: undefined; deleteComponent: undefined }) {
  const [educationInfo, setEducationInfo] = useState<educationType>({
    school: undefined,
    study: undefined,
    graduation: undefined,
  });

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
      {props ? (
        <button
          onClick={(e) =>
            deleteComponent(e, props.id, props.educations, props.setEducations)
          }
        >
          Delete Educational Experience
        </button>
      ) : (
        ""
      )}
    </fieldset>
  );
}
