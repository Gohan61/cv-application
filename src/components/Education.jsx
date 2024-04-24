export default function Education({ input, submitInfo }) {
  return (
    <fieldset>
      <legend>Educational experience</legend>
      <label htmlFor="school">Educational institution: </label>
      <input
        type="text"
        id="school"
        name="school"
        value={input.school}
        onChange={submitInfo}
      />
      <label htmlFor="study">Title of degree: </label>
      <input
        type="text"
        name="study"
        id="study"
        value={input.study}
        onChange={submitInfo}
      />
      <label htmlFor="graduation">Year of graduation: </label>
      <input
        type="text"
        id="graduation"
        name="graduation"
        value={input.graduation}
        onChange={submitInfo}
      />
    </fieldset>
  );
}
