// // Basic Object Destructuring

// const user = {
//   name: "John",
//   age: 30,
//   address: "15th Park Avenue",
// };

// const { name } = user;
// console.log(name);

// const { name, age } = user;
// console.log(name, age);

// // Variable Desclaration Rule

// const user = {
//   name: "John",
//   age: 30,
//   address: "15th Park Avenue",
// };

//   {name}=user

// const name;
// {name}=user
// console.log(name)

// let age;

// ({ age } = user);

// console.log(age);

// // Adding new variable in destructuring

// const user = {
//   name: "John",
//   age: 30,
//   address: "15th Park Avenue",
// };

// const { name, age, salary = 4500 } = user;
// console.log({ name }, { age }, { salary });

// const user = {
//   name: "John",
//   age: 30,
//   address: "15th Park Avenue",
//   salary: 1000,
// };

// const { name, age, salary = 4500 } = user;
// console.log({ name }, { age }, { salary });

// const name = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const { firstName, lastName, fullName = `${firstName} ${lastName}` } = name;
// console.log({ firstName }, { lastName }, { fullName });

// // Add Aliases

// const user = {
//   name: "John",
//   age: 30,
//   address: "15th Park Avenue",
//   salary: 1000,
// };
// const { address: permanentAddress } = user;
// console.log(permanentAddress);

// // Nested Object Destructuring

// const user = {
//   name: "John",
//   age: 30,
//   department: {
//     name: "Sales",
//     shift: "Morning",
//     address: {
//       city: "New York",
//       state: "New York",
//       zip: 5001,
//     },
//   },
// };
// const { department } = user;
// console.log(department);
// const {
//   department: { address },
// } = user;
// console.log(address);
// const {
//   department: {
//     address: { city },
//   },
// } = user;
// console.log(city);

// // Destrucuring in Loops
// const user = [
//   {
//     name: "John",
//     age: 30,
//     address: "15th Park Avenue",
//     salary: 1000,
//   },
//   {
//     name: "Mike",
//     age: 23,
//     address: "15th Avenue",
//     salary: 100,
//   },
// ];

// for (let { name, salary: Salary } of user) {
//   console.log({ name }, { Salary });
// }

// // Destructuring Console

// const { log, warn, error } = console;
// log("This is LOG");
// warn("THis is WARN");
// error("This is ERROR");

// // Updating a USER

// const user = {
//   name: "John",
//   age: 30,
//   address: "15th Park Avenue",
// };

// const updatedUser = { ...user, salary: 1000, age: 31 };
// console.log(updatedUser);

// // Desctructuring in Array

// let introduction = ["Hello", "I", "am", "John"];
// let [greeting, pronoun] = introduction;
// console.log(greeting, pronoun);

// let [greeting, pronoun] = ["Hello", "I", "am", "John"];

// console.log(greeting, pronoun);

// let [, , , name] = ["Hello", "I", "am", "John"];
// console.log(name);

// let [greeting, , , name] = ["Hello", "I", "am", "John"];
// console.log({ name }, { greeting });

// let [greeting, ...intro] = ["Hello", "I", "am", "John"];
// console.log({ intro }, { greeting });

// // Rename

let [greet = "Hello", name = "Sarah"] = ["Hey"];

console.log({ greet, name });
