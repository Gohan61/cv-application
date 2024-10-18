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
        <h2 className="font-bold text-2xl mb-2 text-center bg-slate-500 text-white">
          Personal info
        </h2>
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{personalInfo.name}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td> {personalInfo.email}</td>
            </tr>
            <tr>
              <th>Phone Number:</th>
              <td> {personalInfo.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
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
              responsibilities: practicals[id].responsibilities,
              endDate: practicals[id].endDate,
            }}
          ></PracticalDisplay>
        );
      })}
      <button
        className="printPageButton editSubmitButton"
        onClick={() => setEditStatus(false)}
      >
        Edit
      </button>
      <button
        className="printPageButton editSubmitButton ml-10"
        onClick={() => window.print()}
      >
        Print / Save to pdf
      </button>
    </>
  );
}
