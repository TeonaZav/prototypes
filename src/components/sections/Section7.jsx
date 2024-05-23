import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";

const Section7 = () => {
  return (
    <Section heading="ES6 კლასები">
      <p>
        ES6 კლასები სპეციალური ტიპის ფუნქციები. ისინი ზუსტად ისევე მუშაობს,
        როგორც კონსტრუქტორი ფუნქცია, თუმცა წამოადგენს კლასიკური OOP-კლასების
        სიმულაციას. მას აქვს შემდეგი სინტაქსი:
      </p>
      <CodeEditor codeExample={codeExamples.example9} />
    </Section>
  );
};

export default Section7;
