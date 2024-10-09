import { EducationProps } from "../types/formTypes";

export default function Education({
  props,
  deleteComponent,
}:
  | { props: EducationProps; deleteComponent: Function }
  | { props: EducationProps; deleteComponent: undefined }) {
  const { id, educations, setEducations } = props;

  return (
    <fieldset>
      <legend>Educational experience</legend>
      <label htmlFor="school">Educational institution: </label>
      <input
        type="text"
        id="school"
        name="school"
        value={educations[id].school}
        onChange={(e) => {
          setEducations({
            ...educations,
            [id]: { ...educations[id], school: e.target.value },
          });
        }}
      />
      <label htmlFor="study">Title of degree: </label>
      <input
        type="text"
        id="study"
        name="study"
        value={educations[id].study}
        onChange={(e) => {
          setEducations({
            ...educations,
            [id]: { ...educations[id], study: e.target.value },
          });
        }}
      />
      <label htmlFor="graduation">Year of graduation: </label>
      <input
        type="date"
        id="graduation"
        name="graduation"
        value={educations[id].graduation}
        onChange={(e) =>
          setEducations({
            ...educations,
            [id]: { ...educations[id], graduation: e.target.value },
          })
        }
      />
      {props.id !== "default" ? (
        <button
          onClick={(e) =>
            deleteComponent!(
              e,
              props.id,
              props.educations,
              props.setEducations,
              undefined
            )
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
