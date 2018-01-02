// Synchronous style functions wait for return values
// Page freezes until a value is returned from this function
let results = getPollRequestsFromServer("Sass vs. LESS");
ui.renderSidebar(results);

// Asynchronous style funcitons pass callbacks
getPollRequestsFromServer("Sass vs. Less", function (results) {
  ui.renderSidebar(results);
});


