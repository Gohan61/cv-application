import Form from "./Form";
import { EditButton } from "./Buttons";
import { useState } from "react";
import Display from "./Display";

export default function App() {
  const [isShown, setIsShown] = useState(true);

  const changeShow = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  const [input, saveInput] = useState({ name: "", email: "", number: "" });

  return (
    <>
      <header>
        <h1>Create your own CV</h1>
      </header>
      <main>
        {isShown ? (
          <Form
            changeShow={changeShow}
            isShown={isShown}
            input={input}
            saveInput={saveInput}
          />
        ) : (
          <Display input={input}></Display>
        )}
        <EditButton changeShow={changeShow}></EditButton>
      </main>
      <footer>Good luck!</footer>
    </>
  );
}
