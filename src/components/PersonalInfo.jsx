export default function PersonalInfo({ input, submitInfo }) {
  return (
    <fieldset>
      <legend>Personal Info</legend>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="fullName"
        value={input.name}
        onChange={submitInfo}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={input.email}
        onChange={submitInfo}
      />
      <label htmlFor="phoneNumber">Phone Number: </label>
      <input
        type="text"
        name="phone-number"
        id="phoneNumber"
        value={input.number}
        onChange={submitInfo}
      />
    </fieldset>
  );
}
