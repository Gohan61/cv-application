export default function Display({
  setEditStatus,
}: {
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="personal">
        <h2>Personal info</h2>
        <p>
          <span>Name: </span>
        </p>
        <p>
          <span>Email: </span>
        </p>
        <p>
          <span>Phone Number: </span>
        </p>
      </div>
      <div className="education">
        <h2>Educational experience</h2>
        <p>
          <span>Educational institution: </span>
        </p>
        <p>
          <span>Title of degree: </span>
        </p>
        <p>
          <span>Year of graduation: </span>
        </p>
      </div>
      <div className="practical">
        <h2>Practical experience</h2>
        <p>
          <span>Company name: </span>
        </p>
        <div className="job">
          <p>
            <span>Job position: </span>
          </p>
          <p>Main responsibilities: </p>
          <p>
            <span>Responsibility: </span>
          </p>
        </div>
        <p>
          <span>Start of job: </span>
        </p>
        <p>
          <span>End of job: </span>
        </p>
      </div>
      <button onClick={() => setEditStatus(false)}>Edit</button>
    </>
  );
}
