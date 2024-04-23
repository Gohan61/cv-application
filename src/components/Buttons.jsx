export default function SubmitButton({ changeShow }) {
  const handleClick = (e) => {
    e.preventDefault();
    changeShow();
  };

  return <button onClick={handleClick}>Submit</button>;
}
