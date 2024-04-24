import { useState } from "react";
import SubmitButton from "./Buttons";
import PersonalInfo from "./PersonalInfo";
import Practical from "./Practical";
import Education from "./Education";

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
        <PersonalInfo input={input} submitInfo={submitInfo}></PersonalInfo>
        <Education input={input} submitInfo={submitInfo}></Education>
        <Practical input={input} submitInfo={submitInfo}></Practical>
        <SubmitButton changeShow={changeShow}></SubmitButton>
      </form>
    </>
  );
}
