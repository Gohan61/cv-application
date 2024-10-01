import { useState } from "react";
import { practicalType } from "../types/formTypes";
import Responsibilities from "./Responsibilities";

export default function Practical() {
  const [practicalInfo, setPracticalInfo] = useState<practicalType>({
    company: undefined,
    position: undefined,
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <fieldset>
      <legend>Practical experience</legend>
      <label htmlFor="company">Company name: </label>
      <input
        type="text"
        id="company"
        name="company"
        value={practicalInfo.company}
        onChange={(e) =>
          setPracticalInfo({ ...practicalInfo, company: e.target.value })
        }
      />
      <label htmlFor="position">Job position: </label>
      <input
        type="text"
        id="position"
        name="position"
        value={practicalInfo.position}
        onChange={(e) =>
          setPracticalInfo({ ...practicalInfo, position: e.target.value })
        }
      />
      <ul>
        <p>Main responsibilities in your jobs:</p>
        <Responsibilities></Responsibilities>
      </ul>
      <label htmlFor="startDate">Start of job: </label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={practicalInfo.startDate}
        onChange={(e) =>
          setPracticalInfo({ ...practicalInfo, startDate: e.target.value })
        }
      />
      <label htmlFor="endDate">End of job: </label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={practicalInfo.endDate}
        onChange={(e) =>
          setPracticalInfo({ ...practicalInfo, endDate: e.target.value })
        }
      />
    </fieldset>
  );
}
