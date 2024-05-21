import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";
import NavigationButtons from "../UI/NavigationButtons";

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
    <>
      <NavigationButtons prevPath="/section6" />
      <Section heading="ქვეკლასები">
        <CodeEditor codeExample={codeExamples.example8} />
      </Section>
    </>
  );
};

export default Section7;
