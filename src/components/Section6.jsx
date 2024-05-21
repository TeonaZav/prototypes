
import Section from "./Section";
import CodeEditor from "./CodeEditor";
import { codeExamples } from "../data/demoCodes";
import InnerContainer from "./InnerContainer";

const Section6 = () => {
  return (
    <Section heading="ES6 კლასები">
      <p>ES6 კლასები სპეციალური ტიპის ფუნქციები.</p>
      <CodeEditor codeExample={codeExamples.example9} />
    </Section>
  );
};

export default Section6;
