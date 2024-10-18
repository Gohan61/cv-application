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
      <h2 className="font-bold text-2xl mb-2 text-center bg-slate-500 text-white">
        Educational experience
      </h2>
      <table>
        <tr>
          <th>Educational institution:</th>
          <td>{props.school}</td>
        </tr>
        <tr>
          <th>Title of degree:</th>
          <td>{props.study}</td>
        </tr>
        <tr>
          <th>Year of graduation:</th>
          <td>{props.graduation}</td>
        </tr>
      </table>
    </div>
  );
}
