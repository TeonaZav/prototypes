import React from "react";
import Section from "./Section";
import CodeEditor from "./CodeEditor";
import { codeExamples } from "../data/demoCodes";
import InnerContainer from "./InnerContainer";

const Section7 = () => {
  class PersonCl {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName = function () {
      console.log(this.firstName + " " + this.lastName);
    };
  }

  let john = new PersonCl("John", "Doe");
  john.getFullName();

  console.log(PersonCl.prototype);

  return (
    <Section heading="ქვეკლასები">
      <CodeEditor codeExample={codeExamples.example8} />
    </Section>
  );
};

export default Section7;
