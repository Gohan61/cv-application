import Form from "./General-info";
import { EditButton } from "./Buttons";
import { useState } from "react";

export default function App() {
  const [isShown, setIsShown] = useState(true);

  const changeShow = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  return (
    <>
      <header>
        <h1>Create your own CV</h1>
      </header>
      <main>
        {isShown && <Form changeShow={changeShow} isShown={isShown} />}
        <EditButton changeShow={changeShow}></EditButton>
      </main>
      <footer>Good luck!</footer>
    </>
  );
}
