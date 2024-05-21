export const demoCode1 = `function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.getFullName = function () {
    return this.firstName + this.lastName;
  };
  Person.prototype.getName = function () {
    return this.firstName;
  };

  const adam = new Person("Adam", "Generic");

  console.log(adam.__proto__);

  const person1 = {
    firstName: "Adam",
    lastName: "Generic",
    getFullName() {
      return this.firstName + this.lastName;
    },
  };

  console.log(person1.__proto__);
  const person2 = {
    name: "Eve",
  };`;

export const codeExamples = {
  example1: `

  const nums = [1,2,3,4,5];
  console.log("nums proto is: ", nums.__proto__); 
  console.log(nums.__proto__ === Array.prototype)

  const num = 4.12345636;
  console.log(num.toFixed(2));

  Number.prototype.isPositive = function () {
      return this > 0;
    };

console.log(num.isPositive());
  
`,
  example2: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("I'm invoked");
}

let john = new Person("John", "Doe");
console.log(john);
`,
  example3: `  const a = function () {};
console.log("a prototype is: ", a.prototype); // a prototype is:  {};`,
  example4: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.getFullName = function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

let john = new Person("John", "Doe");
john.getFullName();
`,
  example5: `
const foo = function () {};

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.getFullName = function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

console.log(foo.prototype); 
console.log(Person.prototype)
`,
  example6: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
  console.log(this.firstName + " " + this.lastName);
}

let john = new Person("John", "Doe");
john.getFullName();

console.log(Person.prototype)
`,
  example7: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
  console.log(this.firstName + " " + this.lastName);
}
let john = new Person("John", "Doe");

console.log(Person.prototype);
console.log(john);
console.log(john.__proto__);
console.log(Person.prototype === john.__proto__);
console.log(Person.prototype.isPrototypeOf(john));
`,
  example8: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
  console.log(this.firstName + " " + this.lastName);
}


const Student = function(firstName, lastName, faculty){
  Person.call(this, firstName, lastName);
  this.faculty = faculty;
}
Student.prototype = Object.create(Person.prototype);

const alice = new Student("Alice", "Smith");
alice.getFullName();


`,
  example9: `
  class PersonCl {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName = function () {
      console.log(this.firstName + " " + this.lastName);
    };
  }

  class Studentcl extends PersonCl {
    constructor(firstName, lastName, faculty) {
      super(firstName, lastName); // მშობელი კლასის კონსტრუქტორი ფუნქცია
      this.faculty = faculty;
    }
  }

  const alice = new Studentcl("Alice", "Smith");
  alice.getFullName();
`,
};
