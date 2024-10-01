import { useState } from "react";
import { responsibilityType } from "../types/formTypes";

export default function Responsibilities() {
  const [responsibility, setResponsibility] = useState<responsibilityType>("");

  return (
    <li>
      <label htmlFor="responsibilities">Responsibilities</label>
      <input
        type="text"
        id="responsibilities"
        value={responsibility}
        onChange={(e) => setResponsibility(e.target.value)}
      />
    </li>
  );
}
