import { useState } from "react";

export default function GeneralInfo() {
  return (
    <>
      <fieldset>
        <legend>Personal Info</legend>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="fullName" />
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" />
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input type="text" name="phone-number" id="phoneNumber" />
      </fieldset>
    </>
  );
}
