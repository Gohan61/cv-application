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
    </>
  );
}
