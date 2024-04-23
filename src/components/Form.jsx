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
        <SubmitButton changeShow={changeShow}></SubmitButton>
      </form>
    </>
  );
}
