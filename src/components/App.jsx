import GeneralInfo from "./General-info";
import SubmitButton from "./Buttons";

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
  return (
    <form action="">
      <GeneralInfo></GeneralInfo>
      <SubmitButton></SubmitButton>
    </form>
  );
}
