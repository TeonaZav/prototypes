import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";

const Section6 = () => {

  return (
      <Section heading="ქვეკლასები">
        <CodeEditor codeExample={codeExamples.example8} />
      </Section>
  );
};

export default Section6;
