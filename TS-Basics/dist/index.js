"use strict";
// type user = {
//   name: string;
//   id: number;
// };
function legalUsers(users) {
    return users.filter((user) => user.age > 18 && user);
}
console.log(legalUsers([
    { firstName: "sachin", lastName: "patel", age: 32 },
    { firstName: "rahul", lastName: "patel", age: 12 },
    { firstName: "guava", lastName: "patel", age: 1 },
]));
