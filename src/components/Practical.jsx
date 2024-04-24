export default function Practical({ input, submitInfo }) {
  return (
    <fieldset>
      <legend>Practical experience</legend>
      <label htmlFor="company">Company name: </label>
      <input
        type="text"
        id="company"
        name="company"
        value={input.company}
        onChange={submitInfo}
      />
      <label htmlFor="position">Job position: </label>
      <input
        type="text"
        id="position"
        name="position"
        value={input.position}
        onChange={submitInfo}
      />
      <ul name="responsibilities">
        <label htmlFor="responsibilites">
          Main responsibilites in your jobs:{" "}
        </label>
        <li>
          <input
            type="text"
            value={input.responsibilities1}
            onChange={submitInfo}
            id="responsibilities1"
          />
        </li>
        <li>
          <input
            type="text"
            value={input.responsibilities2}
            onChange={submitInfo}
            id="responsibilities2"
          />
        </li>
        <li>
          <input
            type="text"
            value={input.responsibilities3}
            onChange={submitInfo}
            id="responsibilities3"
          />
        </li>
      </ul>
      <label htmlFor="startDate">Start of job: </label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={input.startDate}
        onChange={submitInfo}
      />
      <label htmlFor="dateEnd">End of job: </label>
      <input
        type="date"
        name="dateEnd"
        id="dateEnd"
        value={input.endDate}
        onChange={submitInfo}
      />
    </fieldset>
  );
}
