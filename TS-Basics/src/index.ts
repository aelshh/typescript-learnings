// type user = {
//   name: string;
//   id: number;
// };

// type admin = {
//   name: string;
//   adminId: number;
// };

// type owner = user & admin;

// let adarsh: owner = {
//   name: "Adarsh",
//   id: 1,
//   adminId: 1,
// };

// console.log(adarsh);

// interface address {
//   cityName: string;
//   pincode: number;
// }

// interface user {
//   name: string;
//   age: number;
//   address?: address;
// }

// let adarsh: user = {
//   name: "adrsh",
//   age: 23,
// };
// let harsh: user = {
//   name: "adrsh",
//   age: 23,
//   address: {
//     cityName: "mumbai",
//     pincode: 23429,
//   },
// };

// interface Person {
//   name: string;
//   age: number;
// }

// const rahul: Person = {
//   name: "Rahul",
//   age: 23,
// };

// abstract class People {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   abstract sayHello(): void;
//   speak() {
//     console.log("Hey I am an alive Person");
//   }
// }

// class Manager extends People {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log("hi");
//   }
// }

// let bhawani = new Manager("Rahul Bhawani", 23);

// class owner extends Manager {
//   constructor(name: string, age: number) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//   }
//   orderPeople(): void {
//     console.log("do work");
//   }
// }

// let adarsh = new owner("adarsh", 21);

// adarsh.orderPeople();
// adarsh.speak();
// adarsh.sayHello()

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function legalUsers(users: User[]) {
//   return users.filter((user) => user.age > 18 && user);
// }

// console.log(
//   legalUsers([
//     { firstName: "sachin", lastName: "patel", age: 32 },
//     { firstName: "rahul", lastName: "patel", age: 12 },
//     { firstName: "guava", lastName: "patel", age: 1 },
//   ])
// );

type type1 = {
  name: string;
  num: number;
};

type type2 = {
  someone: string;
};

let union: type1 | type2 = {
  name: "sdfas",
  num: 23,
  someone: "dfdsa",
};
