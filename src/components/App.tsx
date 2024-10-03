import Form from "./Form";
import { useState } from "react";
import Display from "./Display";

function App() {
  const [educations, setEducations] = useState<string[]>([]);
  const [practicals, setPracticals] = useState<string[]>([]);
  const [personalInfo, setPersonalInfo] = useState<string[]>([]);
  const [editStatus, setEditStatus] = useState(false);

  return (
    <>
      <h1>Create your own CV</h1>
      {editStatus ? (
        <Display setEditStatus={setEditStatus}></Display>
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
