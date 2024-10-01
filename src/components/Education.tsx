import { educationType } from "../types/formTypes";
import { useState } from "react";

export default function Education() {
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
    </fieldset>
  );
}
