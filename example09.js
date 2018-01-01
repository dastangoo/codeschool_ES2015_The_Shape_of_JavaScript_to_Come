let names = ["Sam", "Tyler", "Brook"];

console.log(typeof names[Symbol.iterator]);

for(let name of names){
  console.log(name);
}

let post = {
  title: "New Features in JS",
  replies: 19,
  lastReplyFrom: "Sam" 
};

console.log(typeof post[Symbol.iterator]);