import React from "react";
import Section from "../UI/Section";
import CodeEditor from "../CodeEditor";
import { codeExamples } from "../../data/demoCodes";

const Section5 = () => {
  return (
    <Section heading="როგორ მუშაობს მემკვიდრეობა">
      <p>
        როდესაც დაწერთ john.getFullName()-ს, თუ ჯავასკრიპტი ვერ მოძებნის ასეთ
        მეთოდს ობიექტში, შემდეგ გადავა მის პროტოტიპში.
      </p>
      <CodeEditor codeExample={codeExamples.example7} />
      გამომდინარე იქიდან, რომ კონსტრუქტორი ფუნქიის prototype ფროფერთი თავად არის
      ობიექტი, მასაც გააჩნია __proto__ ფროფერთი და მასაც აქვს პროტოტიპი, რადგან
      ის შექმნილია ჩაშენებული კონსტრუქტორი ფუნქციის Object-ის მიერ. შესაბამისად
      ჯავასკრიპტი გააგრძელებს ძებნას ამ პროტოტიპში, თუ john-ის პროტოტპიში ვერ
      მოძებნის getFullName() მეთოდს.
      <h5 className="m-4">მაგალითი, რომ ყველა გზა მიგვიყვანს Object-მდე:</h5>
      <CodeEditor codeExample={codeExamples.example1} />
    </Section>
  );
};

export default Section5;
