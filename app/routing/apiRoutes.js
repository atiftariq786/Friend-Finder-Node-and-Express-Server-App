// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/friends");

//C:/Users/Hassan/Desktop/FriendFinder/app/data/friends

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  

  app.get("/api/friends", function(req, res) {
    res.json(userData);
  });

  
  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey request... this data is then sent to the server...
  

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    
    // req.body is available since we're using the body parsing middleware
    // Receive user details (name, photo, scores)
    var newUser = req.body;

    // parseInt for scores
    for(var i = 0; i < newUser.scores.length; i++) {
        newUser.scores[i] = parseInt(newUser.scores[i]);
    }
    
    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < userData.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < userData[i].scores.length; j++) {
          var difference = Math.abs(newUser.scores[j] - userData[i].scores[j]);
          totalDifference += difference;
        }
        // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
        if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
          }
        }
// after finding match, add newUser to userData array
      userData.push(newUser);
      res.json(userData[bestFriendIndex]);
    
    
    
  });

  

   
};
