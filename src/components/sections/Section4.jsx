import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";
import NavigationButtons from "../UI/NavigationButtons";


const Section4 = () => {
  return (
    <>
      <NavigationButtons prevPath="/section3" nextPath="/section5" />
      <Section heading="ფროფერთი სახელწოდებით 'prototype'">
        <h6 className="m-4">
          ზემოთ ვთქვით, რომ ახლად შექმნილი ობიექტი {"{"}
          {"}"} დაუკავშირდება "prototype"-ს. რა არის ეს "prototype"?
        </h6>
        <p>
          ჯავასკრიპტში ყველაფერი, რაც არ არის პრიმიტივი, არის ობიექტი. მათ შორის
          მასივი და ფუნქციაც. შესბამისად ფუნქციას აქვს ფროფერთიები. მათ შორის
          არის ფროფერთი "prototype", რომელიც არის ცარიელი ობიექტი.
        </p>
        <p>
          მათ შორის არის ფროფერთი "prototype", რომელიც არის ცარიელი ობიექტი.
        </p>
        <CodeEditor codeExample={codeExamples.example5} />
        <p>
          მებისმიერი ობიექტი, რომელიც შეიქმნება კონსტრუქტორი ფუნქციით,
          ავტომატურად მიიღებს წვდომას ყველა იმ ფროფერთიზე და მეთოდზე, რომელსაც
          განვსაზღვრავთ prototype-ობიექტში.
        </p>
        <CodeEditor codeExample={codeExamples.example6} />
        <h6 className="m-4">როგორ ხდება ეს წვდომა?</h6>
        <p>
          ჯავსკრიპტში თითოეულ ობიექტს აქვს ფროფერთი __proto__ (ერთადერთი
          გამონაკლისია base ობიექტი Object). ეს __proto__ არის რეფერენსი
          "prototype" ობიექტზე.
        </p>
        <CodeEditor codeExample={codeExamples.example7} />
      </Section>
    </>
  );
};

export default Section4;
