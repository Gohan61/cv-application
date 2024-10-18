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
      <h2 className="font-bold text-2xl mb-2 text-center bg-slate-500 text-white">
        Practical experience
      </h2>
      <table>
        <tbody>
          <tr>
            <th>Company name:</th>
            <td>{props.company}</td>
          </tr>
          <tr>
            <th>Job position:</th>
            <td>{props.position}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Main responsibilities:</th>
            {props.responsibilities
              ? Object.keys(props.responsibilities).map((resp) => {
                  return (
                    <td key={resp} className="font-normal">
                      {props.responsibilities![resp]}
                    </td>
                  );
                })
              : ""}
          </tr>

          <tr>
            <th>Start of job:</th>
            <td>{props.startDate}</td>
          </tr>
          <tr>
            <th>End of job:</th>
            <td>{props.endDate}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
