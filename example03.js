// getPollRequestsFromServer("Sass vs. LESS")
//   .then(ui.renderSidebar)
//   .then(sendNotificationToServer)
//   .then(doSomethingElseNonBlocking)
//   .catch(function (error) {
//     console.log("Error: ", error);
//   });
  
function getPollRequestsFromServer(pollName) {
  return new Promise(function (resolve, reject) {
    let url = `/results/${pollName}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // resolve(JSON.parse(request.response));
        resolve(request.response);
      } else {
        reject(new Error(request.status));
      }
    };
    request.onerror = function () {
      reject(new Error("Error Fetching Results"));
    };
    request.send();
  });
}



function filterResults(results) {
  // ...
}

let ui = {
  renderSidebar(filteredResults) {
    // ...
  }
};
getPollRequestsFromServer("Sass vs. LESS")
  .then(filterResults)
  .then(ui.renderSidebar)
  .catch(function (error) {
    console.log("Error: ", error);
  });