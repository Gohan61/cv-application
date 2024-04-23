import { useState } from "react";
import SubmitButton from "./Buttons";

export default function Form({ changeShow, input, saveInput }) {
  function submitInfo(e) {
    switch (true) {
      case e.target.id === "name":
        saveInput({ ...input, name: e.target.value });
        break;
      case e.target.id === "email":
        saveInput({ ...input, email: e.target.value });
        break;
      case e.target.id === "phoneNumber":
        saveInput({ ...input, number: e.target.value });
        break;
      case e.target.id === "school":
        saveInput({ ...input, school: e.target.value });
        break;
      case e.target.id === "study":
        saveInput({ ...input, study: e.target.value });
        break;
      case e.target.id === "graduation":
        saveInput({ ...input, graduation: e.target.value });
        break;
      case e.target.id === "company":
        saveInput({ ...input, company: e.target.value });
        break;
      case e.target.id === "position":
        saveInput({ ...input, position: e.target.value });
        break;
      case e.target.id === "responsibilities1":
        saveInput({ ...input, responsibilities1: e.target.value });
        break;
      case e.target.id === "responsibilities2":
        saveInput({ ...input, responsibilities2: e.target.value });
        break;
      case e.target.id === "responsibilities3":
        saveInput({ ...input, responsibilities3: e.target.value });
        break;
      case e.target.id === "startDate":
        saveInput({ ...input, startDate: e.target.value });
        break;
      case e.target.id === "dateEnd":
        saveInput({ ...input, endDate: e.target.value });
        break;
    }
  }

  function displayOnSubMit() {}

  return (
    <>
      <form action="" onSubmit={displayOnSubMit}>
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
        <SubmitButton changeShow={changeShow}></SubmitButton>
      </form>
    </>
  );
}
