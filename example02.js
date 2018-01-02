getPollRequestsFromServer(pollName, function (error, results) {
  // ...
  if (error) { 
    // ... handle error 
  }
  // ...
  ui.renderSidebar(results, function (error) {
    if (error) { 
      // .. handle error
    }
    // ...
    sendNotificationToServer(pollName, results, function (error, response) {
      if (error) { 
        // .. handle error 
      }  
      doSomethingElseNonBlocking(response, function (error) {
        if (error) { 
          // .. handle error 
        }
      });
    });
  });
});