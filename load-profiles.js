function loadProfiles(userNames = []) {
  // let names = typeof userNames !== 'undefined' ? userNames : [];
  // let namesLength = names.length;
  const MAX_USERS = 3;
  // console.log(MAX_USERS);
  if (userNames.length > MAX_USERS) {
    let loadingMessage = "This might take a while...";
    // console.log(loadingMessage);
    _displaySpinner(loadingMessage);
    
  } else {
    let flashMessage = "Loading Profiles";
    // console.log(flashMessage);
    _displayFlash(flashMessage);
  }
  
  const MAX_REPLIES = 3;
  // console.log(MAX_REPLIES);
  
  for (let i in userNames) {
    _fetchProfile("/users/" + userNames[i], function () {
      console.log("Fetched for " + userNames[i]);
    });
  }
  
  // setPageThread("New Version out Soon!", {
  //   popular: true,
  //   expires: 10000,
  //   activeClass: "is-page-thread"
  // });
  // setPageThread("New Version Out Soon!", {
  //   popular: true
  // });
  // setPageThread("New Version Out Soon!");
  displayTags("songs");
  displayTags("songs", "lyrics", "bands");
  // getRequest("/topics/17/tags", function (data) {
  //   let tags = data.tags;
  //   displayTags(...tags);
  // });
  let targetDiv = "";
  let tagComponent = new TagComponent(targetDiv, "/topics/17/tags");
  tagComponent.render();
  // let first = "a";
  // let last = "b";
  // console.log(`${first} ${last}`);
}

function _displayFlash() {
  
}

function _displaySpinner() {
  
}
function _fetchProfile(path, cb) {
  
}

// function setPageThread(name, options= {}) {
//   let popular = options.popular;
//   console.log(popular);
//   let expires = options.expires;
//   console.log(expires);
//   let activeClass = options.activeClass;
//   console.log(activeClass);
// }

// function setPageThread(name, { popular, expires, activeClass }) {
//   console.log("Name: " + name);
//   console.log("Popular: " + popular);
//   console.log("Expires: " + expires);
//   console.log("Active: " + activeClass);
// }
function setPageThread(name, { popular, expires, activeClass } = {}) {
  console.log("Name: " + name);
  console.log("Popular: " + popular);
  console.log("Expires: " + expires);
  console.log("Active: " + activeClass);
}

// function displayTags() {
//   for(let i in arguments) {
//     let tag = arguments[i];
//     _addToTopic(tag);
//   }
// }

function displayTags(...tags) {
  for(let i in tags) {
    let tag = tags[i];
    _addToTopic(tag);
  }
}

// function displayTags(targetElement) {
//   let target = _findElement(targetElement);
// 
//   for(let i in arguments){
//     let tag = arguments[i];
//     _addToTopic(target, tag);
//   }
// }

function displayTags(targetElement, ...tags) {
  let target = _findElement(targetElement);

  for(let i in tags){
    let tag = tags[i];
    _addToTopic(target, tag);
  }
}
function _addToTopic() {
  
}
function _findElement(element) {
  
}
function TagComponent(target, urlPath) {
  this.targetElement = target;
  this.urlPath = urlPath;
}
TagComponent.prototype.render = function () {
  getRequest(this.urlPath, (data) => {
    let tags = data.tags;
    displayTags(this.targetElement, ...tags);
  });
};

function getRequest(path, cb) {
  
}


// function buildUser(first, last) {
  // let fullName = first + " " + last;
  // let fullName = `{first} + " " + {last}`;
  // return { first: first, last: last, fullName: fullName };
  
  // Shorthand Object initializer in case where parameter names and properties of object have the same name.
//   return { first, last, fullName };
// }
// function buildUser(first, last, postCount) {
//   let fullName = first + " " + last;
//   const ACTIVE_POST_COUNT = 10;
// 
//   return {
//     first,
//     last, 
//     fullName,
//     isActive: function () {
//       return postCount >= ACTIVE_POST_COUNT;
//     }
//   };
// }
function buildUser(first, last, postCount) {
  // let fullName = first + " " + last;
  let fullName = `${first} ${last}`;
  const ACTIVE_POST_COUNT = 10;
  
  return {
    first,
    last, 
    fullName,
    isActive() {
      return postCount >= ACTIVE_POST_COUNT;
    }
  };
}

// let user = buildUser("John", "Doe");
// console.log(user.first);
// console.log(user.last);
// console.log(user.fullName);

// let first = user.first;
// let last = user.last;
// let fullName = user.fullName;

// let {first, last, fullName} = buildUser("John", "Doe");
// let { fullName } = buildUser("Same", "Williams");
let { last, fullName } = buildUser("Same", "Williams");
// console.log(first);
// console.log(last);
console.log(last);
console.log(fullName);



let name = "Sam";
let age = 45;
let friends = ["Brook", "Tyler"];

// let user = { name: name, age: age, friends: friends };
// let user = { name, age, friends };

// console.log(user.name);
// console.log(user.age);
// console.log(user.friends);


let userName = "Sam";
let admin = { fullName: "Alex Williams" };

let veryLongText = `Hi ${userName},
this is a very
very


veeeery
long text.


Regards,
 ${admin, fullName}
`;

console.log(veryLongText);