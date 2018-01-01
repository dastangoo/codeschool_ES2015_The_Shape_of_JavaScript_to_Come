function loadProfiles(userNames) {
  // let flashMessage = "Hello";
  // flashMessage = "Goodbye";
  // let flashMessage = "Hi";
  if (userNames.length > 3) {
    // var loadingMessage = "This might take a while...";
    let loadingMessage = "This might take a while...";
    _displaySpinner(loadingMessage);
    console.log(flashMessage);
  } else {
    // var flashMessage = "Loading Profiles";
    let flashMessage = "Loading Profiles";
    _displayFlash(flashMessage);
  }
  console.log(flashMessage);
  // ... fetch names and build sidebar
  
  // for (var i in userNames) {
  //   _fetchProfile("/users/" + userNames[i], function () {
  //     console.log("Fetched for " + userNames[i]);
  //   });
  // }
  
  for (let i in userNames) {
    _fetchProfile("/users/" + userNames[i], function () {
      console.log("Fetched for " + userNames[i]);
    });
  }
}

function _displayFlash() {
  
}

function _displaySpinner() {
  
}
function _fetchProfile(path, cb) {
  
}