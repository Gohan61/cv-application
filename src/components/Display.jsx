export default function Display({ input }) {
  return (
    <>
      <section>
        <h2>Personal info</h2>
        <p>Name: {input.name}</p>
        <p>Email: {input.email}</p>
        <p>Phone number: {input.number}</p>
      </section>
      <section>
        <h2>Educational experience</h2>
        <p>Educational experience: {input.school}</p>
        <p>Title of degree: {input.study}</p>
        <p>Year of graduation: {input.graduation}</p>
      </section>
      <section>
        <h2>Practial experience</h2>
        <p>Company name: {input.company}</p>
        <p>Job position: {input.position}</p>
        <p>Main responsibilites:</p>
        <ul>
          <li>{input.responsibilities1}</li>
          <li>{input.responsibilities2}</li>
          <li>{input.responsibilities3}</li>
        </ul>
        <div>
          <p>Start of job: {input.startDate}</p>
          <p>End of job: {input.endDate}</p>
        </div>
      </section>
    </>
  );
}
