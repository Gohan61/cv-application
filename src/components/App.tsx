import Form from "./Form";
import { useState } from "react";
import Display from "./Display";
import {
  educationType,
  personalInfoType,
  practicalType,
} from "../types/formTypes";

function App() {
  const [educations, setEducations] = useState<educationType>({
    default: { school: "", study: "", graduation: "" },
  });
  const [practicals, setPracticals] = useState<practicalType>({
    default: {
      company: "",
      position: "",
      responsibilities: { default: "" },
      startDate: "",
      endDate: "",
    },
  });
  const [personalInfo, setPersonalInfo] = useState<personalInfoType>({
    name: "",
    email: "",
    phoneNumber: undefined,
  });
  const [editStatus, setEditStatus] = useState(false);

  return (
    <>
      <h1>Create your own CV</h1>
      {editStatus ? (
        <Display
          setEditStatus={setEditStatus}
          educations={educations}
          practicals={practicals}
          personalInfo={personalInfo}
        ></Display>
      ) : (
        <Form
          educationProps={{ educations, setEducations }}
          practicalProps={{ practicals, setPracticals }}
          personalProps={{ personalInfo, setPersonalInfo }}
          setEditStatus={setEditStatus}
        ></Form>
      )}
    </>
  );
}

export default App;
