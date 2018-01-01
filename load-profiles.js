function loadProfiles(userNames) {
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
}