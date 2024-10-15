export default function PracticalDisplay({
  props,
}: {
  props: {
    company: string | undefined;
    position: string | undefined;
    startDate: string | undefined;
    responsibilities: { [key: string]: string } | undefined;
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
        {props.responsibilities
          ? Object.keys(props.responsibilities).map((resp) => {
              return (
                <span>
                  Responsibility: <p>{props.responsibilities![resp]}</p>
                </span>
              );
            })
          : ""}
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
