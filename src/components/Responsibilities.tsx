import { practicalType } from "../types/formTypes";

export default function Responsibilities({
  responsibility,
  practicals,
  id,
  respId,
  setPracticals,
  deleteComponent,
}: {
  responsibility: string;
  practicals: practicalType;
  id: string;
  respId: string;
  setPracticals: React.Dispatch<React.SetStateAction<practicalType>>;
  deleteComponent: Function;
}) {
  return (
    <>
      <li>
        <label htmlFor="responsibilities">Responsibilities</label>
        <input
          className="inputBorder"
          type="text"
          id="responsibilities"
          value={responsibility}
          onChange={(e) =>
            setPracticals({
              ...practicals,
              [id]: {
                ...practicals[id],
                responsibilities: {
                  ...practicals[id].responsibilities,
                  [respId]: e.target.value,
                },
              },
            })
          }
        />
      </li>
      {respId !== "default" ? (
        <button
          className="deleteButtons"
          onClick={(e) => {
            deleteComponent(e, id, practicals, setPracticals, respId);
          }}
        >
          Delete responsibility
        </button>
      ) : (
        ""
      )}
    </>
  );
}
