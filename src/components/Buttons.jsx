export default function SubmitButton({ changeShow }) {
  const handleClick = (e) => {
    e.preventDefault();
    changeShow();
  };

  return <button onClick={handleClick}>Submit</button>;
}

export function EditButton({ changeShow }) {
  return <button onClick={changeShow}>Edit</button>;
}
