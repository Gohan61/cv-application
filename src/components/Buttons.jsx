export default function SubmitButton() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return <button onClick={handleClick}>Submit</button>;
}
