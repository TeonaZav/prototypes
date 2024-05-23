import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";

const Section4 = () => {
  return (
    
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

        <CodeEditor codeExample={codeExamples.example5} />
        <p>
          ნებისმიერი ობიექტი, რომელიც შეიქმნება კონსტრუქტორი ფუნქციით,
          ავტომატურად მიიღებს წვდომას ყველა იმ ფროფერთიზე და მეთოდზე, რომელსაც
          განვსაზღვრავთ prototype-ობიექტში.
        </p>
        <CodeEditor codeExample={codeExamples.example6} />
        <h6 className="m-4">როგორ ხდება ეს წვდომა?</h6>
        <p>
          ჯავსკრიპტში თითოეულ ობიექტს აქვს ფროფერთი __proto__. ეს __proto__ არის
          რეფერენსი თავისი კონსტრუქტორი ფუნქციის ფროფერთ - "prototype"-ზე,
          რომელიც, როგორც უკვე აღვნიშნეთ, არის ობიექტი.
        </p>

        <CodeEditor codeExample={codeExamples.example7} />
      </Section>
  
  );
};

export default Section4;
