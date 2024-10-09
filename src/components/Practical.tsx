import { PracticalProps, practicalType } from "../types/formTypes";
import Responsibilities from "./Responsibilities";

export default function Practical({
  props,
  deleteComponent,
}:
  | { props: PracticalProps; deleteComponent: Function }
  | { props: PracticalProps; deleteComponent: undefined }) {
  const { id, practicals, setPracticals } = props;

  return (
    <fieldset>
      <legend>Practical experience</legend>
      <label htmlFor="company">Company name: </label>
      <input
        type="text"
        id="company"
        name="company"
        value={practicals[id].company}
        onChange={(e) =>
          setPracticals({
            ...practicals,
            [id]: { ...practicals[id], company: e.target.value },
          })
        }
      />
      <label htmlFor="position">Job position: </label>
      <input
        type="text"
        id="position"
        name="position"
        value={practicals[id].position}
        onChange={(e) =>
          setPracticals({
            ...practicals,
            [id]: { ...practicals[id], position: e.target.value },
          })
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
        value={practicals[id].startDate}
        onChange={(e) =>
          setPracticals({
            ...practicals,
            [id]: { ...practicals[id], startDate: e.target.value },
          })
        }
      />
      <label htmlFor="endDate">End of job: </label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={practicals[id].endDate}
        onChange={(e) =>
          setPracticals({
            ...practicals,
            [id]: { ...practicals[id], endDate: e.target.value },
          })
        }
      />
      {id !== "default" ? (
        <button
          onClick={(e) =>
            deleteComponent!(e, props.id, props.practicals, props.setPracticals)
          }
        >
          Delete Practical Experience
        </button>
      ) : (
        ""
      )}
    </fieldset>
  );
}
