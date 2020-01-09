//run the code below in:  jsbin.com

//REACT CLASSES (extends)
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'chris';
  gender = 'female';
}

priMyntName = () => {
  console.log(this.name);
};

const person = new Person();
person.printMyName();
person.printGender();




//REACT SPREAD Operator
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6, 7];

console.log(newNumbers);

const person = {
  name: 'chris'
};

const newPerson = {
  ...person,
  age: 29
};

console.log(newPerson);




//REST Operator
const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
};

console.log(newPerson);





//REST operator
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));




//Array Destructuring
const numbers = [1,2,3];
[num1,,num3] = numbers;
//console.log(num1, num2)
console.log(num1,num3)


//Object Destructuring (not supported in jsbin.com)
{name} = {name: 'Max', age: 28}
console.log(name) //Max
console.log(age) //undefined



//Reference Types
const person = {
  name: 'Max'
}

const secondPerson = {
  ...person
}; //by using "...", you are actually copying the object instead of only pointing to it in memory
person.name = 'Manu';
console.log(secondPerson);  //will get Max


//Array Functions
const numbers = [1,2,3]
const doubleNumArray = numbers.map((num) => {
  return num *2;
});

console.log(numbers)  //original numbers
console.log(doubleNumArray); //doubled numbers