function Animal(name) {
  this.name = name;
} //კონსტრუქტორი ფუნქცია Animal ობიექტისთვის
//როგორ მუშაობს: როდესაც ვქმნით ახალ  Animal ობიექტს, new Animal('Some Name')-ის გამოყენებით, this keyword მიანიშნებს ახალ შექმნილ ობიექტზე და name property მიენიჭება ის მნიშვნელობა, რასაც გადავცემთ კონსტრუქტორს.

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};//What It Does: This adds a speak method to the prototype of Animal.
//How It Works: All instances of Animal will have access to the speak method. When speak is called on an Animal instance, it returns a string that includes the name property of the instance.

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal

Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  return `${this.name} barks.`;
};

export { Animal, Dog };
