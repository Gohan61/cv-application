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
        <SubmitButton changeShow={changeShow}></SubmitButton>
      </form>
    </>
  );
}
