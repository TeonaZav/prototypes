import { Animal, Dog } from "./../prototypalInheritance";

const AnimalComponent = () => {
  const genericAnimal = new Animal("Generic Animal");
  const dog = new Dog("Buddy");

  return (
    <div>
      <h2>Prototypal Inheritance Demo</h2>
      <p>{genericAnimal.speak()}</p>
      <p>{dog.speak()}</p>
    </div>
  );
};

export default AnimalComponent;
