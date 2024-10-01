import { useState } from "react";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Practical from "./Practical";

export default function Form() {
  return (
    <form action="">
      <PersonalInfo></PersonalInfo>
      <Education></Education>
      <Practical></Practical>
    </form>
  );
}
