import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";
import NavigationButtons from "../UI/NavigationButtons";


const Section6 = () => {
  return (
    <>
      <NavigationButtons prevPath="/section5" nextPath="/section7" />
      <Section heading="ES6 კლასები">
        <p>ES6 კლასები სპეციალური ტიპის ფუნქციები.</p>
        <CodeEditor codeExample={codeExamples.example9} />
      </Section>
    </>
  );
};

export default Section6;
