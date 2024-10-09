import { educationType, practicalType } from "../types/formTypes";
import EducationDisplay from "./EducationDisplay";
import PracticalDisplay from "./PracticalDisplay";
import { personalInfoType } from "../types/formTypes";

export default function Display({
  setEditStatus,
  educations,
  practicals,
  personalInfo,
}: {
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
  educations: educationType;
  practicals: practicalType;
  personalInfo: personalInfoType;
}) {
  return (
    <>
      <div className="personal">
        <h2>Personal info</h2>
        <p>
          <span>Name: </span>
          {personalInfo.name}
        </p>
        <p>
          <span>Email: </span>
          {personalInfo.email}
        </p>
        <p>
          <span>Phone Number: </span>
          {personalInfo.phoneNumber}
        </p>
      </div>
      {Object.keys(educations).map((id: string) => {
        return (
          <EducationDisplay
            key={id}
            props={{
              school: educations[id].school,
              study: educations[id].study,
              graduation: educations[id].graduation,
            }}
          ></EducationDisplay>
        );
      })}
      {Object.keys(practicals).map((id: string) => {
        return (
          <PracticalDisplay
            key={id}
            props={{
              company: practicals[id].company,
              position: practicals[id].position,
              startDate: practicals[id].startDate,
              endDate: practicals[id].endDate,
            }}
          ></PracticalDisplay>
        );
      })}
      <button onClick={() => setEditStatus(false)}>Edit</button>
    </>
  );
}
