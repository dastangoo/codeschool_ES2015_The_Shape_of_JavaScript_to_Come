function loadProfiles(userNames) {
  const MAX_USERS = 3;
  console.log(MAX_USERS);
  if (userNames.length > MAX_USERS) {
    let loadingMessage = "This might take a while...";
    console.log(loadingMessage);
    _displaySpinner(loadingMessage);
    
  } else {
    let flashMessage = "Loading Profiles";
    console.log(flashMessage);
    _displayFlash(flashMessage);
  }
  
  const MAX_REPLIES = 3;
  console.log(MAX_REPLIES);
  
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