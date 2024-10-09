import { practicalType } from "../types/formTypes";

export default function Responsibilities({
  responsibility,
  practicals,
  id,
  respId,
  setPracticals,
}: {
  responsibility: string;
  practicals: practicalType;
  id: string;
  respId: string;
  setPracticals: React.Dispatch<React.SetStateAction<practicalType>>;
}) {
  return (
    <li>
      <label htmlFor="responsibilities">Responsibilities</label>
      <input
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
  );
}
