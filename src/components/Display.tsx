export default function Display({
  setEditStatus,
  educations,
  practicals,
  personalInfo,
}: {
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="personal">
        <h2>Personal info</h2>
        <p>
          <span>Name: </span>
          {personalInfo.name}
        </p>
        <p>
          <span>Email: </span>
          {personalInfo.email}
        </p>
        <p>
          <span>Phone Number: </span>
          {personalInfo.phoneNumber}
        </p>
      </div>
      <div className="education">
        <h2>Educational experience</h2>
        <p>
          <span>Educational institution: </span>
          {educations.school}
        </p>
        <p>
          <span>Title of degree: </span>
          {educations.study}
        </p>
        <p>
          <span>Year of graduation: </span>
          {educations.graduation}
        </p>
      </div>
      <div className="practical">
        <h2>Practical experience</h2>
        <p>
          <span>Company name: </span>
          {practicals.company}
        </p>
        <div className="job">
          <p>
            <span>Job position: </span>
            {practicals.position}
          </p>
          <p>Main responsibilities: </p>
          <p>
            <span>Responsibility: </span>
          </p>
        </div>
        <p>
          <span>Start of job: </span>
          {practicals.startDate}
        </p>
        <p>
          <span>End of job: </span>
          {practicals.endDate}
        </p>
      </div>
      <button onClick={() => setEditStatus(false)}>Edit</button>
    </>
  );
}
