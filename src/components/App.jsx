import GeneralInfo from "./General-info";
import SubmitButton from "./Buttons";
import { useState } from "react";

export default function App() {
  return (
    <>
      <header>
        <h1>Create your own CV</h1>
      </header>
      <main>
        <Form />
      </main>
      <footer>Good luck!</footer>
    </>
  );
}

function Form() {
  const [isShown, setIsShown] = useState(true);

  const changeShow = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  return (
    <form action="" style={{ display: isShown ? "" : "none" }}>
      <GeneralInfo></GeneralInfo>
      <SubmitButton changeShow={changeShow}></SubmitButton>
    </form>
  );
}
