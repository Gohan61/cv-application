import { personalInfoType } from "../types/formTypes";

export default function PersonalInfo({
  personalInfo,
  setPersonalInfo,
}: {
  personalInfo: personalInfoType;
  setPersonalInfo: React.Dispatch<React.SetStateAction<personalInfoType>>;
}) {
  return (
    <fieldset className="pb-5">
      <legend>Personal Info</legend>
      <label htmlFor="name">Name: </label>
      <input
        className="inputBorder"
        type="text"
        id="name"
        name="fullName"
        value={personalInfo.name}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, name: e.target.value })
        }
      />
      <label htmlFor="email">Email: </label>
      <input
        className="inputBorder"
        type="email"
        id="email"
        name="email"
        value={personalInfo.email}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, email: e.target.value })
        }
      />
      <label htmlFor="phoneNumber">Phone number: </label>
      <input
        className="inputBorder"
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        value={personalInfo.phoneNumber}
        onChange={(e) =>
          setPersonalInfo({
            ...personalInfo,
            phoneNumber: Number(e.target.value),
          })
        }
      ></input>
    </fieldset>
  );
}
