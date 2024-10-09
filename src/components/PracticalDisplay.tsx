export default function PracticalDisplay({
  props,
}: {
  props: {
    company: string | undefined;
    position: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
  };
}) {
  return (
    <div className="practical">
      <h2>Practical experience</h2>
      <p>
        <span>Company name: </span>
        {props.company}
      </p>
      <div className="job">
        <p>
          <span>Job position: </span>
          {props.position}
        </p>
        <p>Main responsibilities: </p>
        <p>
          <span>Responsibility: </span>
        </p>
      </div>
      <p>
        <span>Start of job: </span>
        {props.startDate}
      </p>
      <p>
        <span>End of job: </span>
        {props.endDate}
      </p>
    </div>
  );
}
