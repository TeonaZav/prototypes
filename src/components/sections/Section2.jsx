import Section from "../UI/Section";
import InnerContainer from "../UI/InnerContainer";
import NavigationButtons from "../UI/NavigationButtons";


const Section2 = () => {
  return (
    <>
      <NavigationButtons prevPath="/section1" nextPath="/section3" />
      <Section heading="OOP ჯავასკრიპტში">
        <p>
          დავიწყოთ იმით რომ, ჯავასკრიპტი არ არის კლასიკური OOP ენა. ჯავასკრიპტში
          არ გვაქვს კლასები.
        </p>
        <p>
          მიუხედავად იმისა, რომ ის იყენებს OOP პრინციპებს, ეს არის ერთგვარი
          სიმულაცია.
        </p>

        <InnerContainer heading3="თუ არ გვაქვს კლასები, როგორ ვქმნით ობიექტებს პროგრამულად?">
          <ul className="list-group custom-list">
            <li className="list-group-item bg-dark bg-gradient text-light">
              ამის მიღწევის 3 მეთოდი არსებობს. ესენია:
            </li>
            <li className="list-group-item bg-light">
              <h5>Constructor ფუნქფია</h5>
              <p>ობიექტი იქმნება ფუნქციიდან.</p>
            </li>
            <li className="list-group-item bg-light">
              <h5>ES6 კლასები</h5>
              <p>
                ზუსტად ისევე მუშაობს, როგორც კონსტრუქტორი ფუნქცია, თუმცა
                მიმსგავსებულია კლასიკური OOP კლასებს და არის უფრო თანამედროვე
                გზა.
              </p>
            </li>
            <li className="list-group-item bg-light">
              <h5>Object.create()</h5>
              <p>ეს არის ყველაზე ნაკლებად გამოყენებადი მეთოდი;</p>
            </li>
          </ul>
        </InnerContainer>
      </Section>
    </>
  );
};

export default Section2;
