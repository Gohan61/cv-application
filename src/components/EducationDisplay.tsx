export default function EducationDisplay({
  props,
}: {
  props: {
    school: string | undefined;
    study: string | undefined;
    graduation: string | undefined;
  };
}) {
  return (
    <div className="education">
      <h2>Educational experience</h2>
      <p>
        <span>Educational institution: </span>
        {props.school}
      </p>
      <p>
        <span>Title of degree: </span>
        {props.study}
      </p>
      <p>
        <span>Year of graduation: </span>
        {props.graduation}
      </p>
    </div>
  );
}
