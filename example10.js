let users = [
  { login: "Sam", admin: false },
  { login: "Brook", admin: true },
  { login: "Tyler", admin: true }
];

// Using arrow function
// let admin = users.find( (user) => {
//   return user.admin;
// });

// Using anonymous function 
// let admin = users.find(function (user) {
//   return user.admin;
// });


// Using short version of arrow function
let admin = users.find( user => user.admin );

console.log(admin);