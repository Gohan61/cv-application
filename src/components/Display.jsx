export default function Display({ input }) {
  return (
    <>
      <section>
        <h2>Personal info</h2>
        <p>Name: {input.name}</p>
        <p>Email: {input.email}</p>
        <p>Phone number: {input.number}</p>
      </section>
    </>
  );
}
