var friendsData = require("../data/friends.js");

//allows us to use data in other parts of the program
//do I need this?
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    var newFriend = req.body;
    var total = 0;
    var friendsArray = []
    var differenceArray = [];
      for (let i=0; i<friendsArray.length; i++) {
        differenceArray[i] = math.abs(friendsArray[i]-newFriendsArray[i]);
        total += differenceArray[i];
      }
      console.log(total);

  })
}
