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
  setPageThread("New Version Out Soon!");
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