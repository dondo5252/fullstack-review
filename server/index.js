const getrepo = require('../helpers/github.js')
const express = require('express');
let app = express();
console.log('GET REPPO', getrepo)
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  //console.log(req.body, 'HELLLLOOOOO')

  getrepo.getReposByUsername(req.body.username)
  .then((data) => {
    console.log('I am the controller that got this data', data)
  })
  //res.send
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  //res.send
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

