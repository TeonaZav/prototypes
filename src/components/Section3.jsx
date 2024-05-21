import React from "react";
import Section from "./Section";
import CodeEditor from "./CodeEditor";
import { codeExamples } from "../data/demoCodes";
import InnerContainer from "./InnerContainer";

const Section3 = () => {
  return (
    <Section
      heading4="კარგად რომ გავიგოთ რა არის პროტოტიპი, პირველად განვიხილავ
    Constructor ფუნქციას."
    >
      <h2>კონსტრუქტორი ფუნცქია, და new ქივორდი</h2>

      <p>
        კონსტრუქტორი ფუნქცია არის ჩვეულებრივი ფუნქცია. განსხვავება მხოლოდ ისაა,
        რომ მისი სახელი იწყება დიდი ასოთი და მისი გამოძახება უნდა მოხდეს new
        ოპერატორის მეშვეობით.
      </p>
      <p>მაგალითი:</p>
      <CodeEditor codeExample={codeExamples.example2} />
      <ul className="list-group custom-list">
        <li className="list-group-item bg-dark bg-gradient text-light">
          რა ხდება მაშინ როდესაც კონსტრუქტორ ფუნქციას ვიძახებთ new ოპერატორით?
        </li>
        <li className="list-group-item bg-light">
          1. იქმნება ახალი, ცარიელი ობიექტი {"{"}
          {"}"};
        </li>
        <li className="list-group-item bg-light">
          2. გამოიძახება კონსტრუქტორი ფუნქია Person. როდესაც ფუნქცია გაეშვება
          execution context-ი დააგენერირებს სპეციალურ ცვლადს this-ს, რომელსაც
          new ოპერატორი მიმართავს ახლად შექმნილ ცარიელ ობიექტზე. შესაბამისად
          this მეხსიერებაში მიანიშნებს ამ ცარიელ ობიექტზე {"{"}
          {"}"};
        </li>
        <li className="list-group-item bg-light">
          3. ახლად შექმნული ობიექტი {"{"}
          {"}"} დაუკავშირდება "prototype"-ს;
        </li>
        <li className="list-group-item bg-light">
          4. რადგან ვიცით, რომ this = {"{"}
          {"}"}, შეგვიძლია ამ ობიეტში ჩავამატოთ ფროფერთიები. ამ შემთხვევაში
          ვამატებ firstName-ს და lastName ფროფერთიებს შესაბამისი მნიშვნელობებით.
        </li>
        <li className="list-group-item bg-light">
          5. კონსტრუქტორი ფუნქცია ავტომატურად დააბრუნებს მოცემულ ობიექტს;
        </li>
      </ul>

      <InnerContainer>
        {" "}
        <CodeEditor codeExample={codeExamples.example4} />
      </InnerContainer>
    </Section>
  );
};

export default Section3;
