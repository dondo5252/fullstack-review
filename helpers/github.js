const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // let options = {
  //   url: 'https://api.github/users' + username + '/repos',
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // }
return axios.get(`https://api.github.com/users/${username}/repos`)
.then(function (response) {
  return response
})
.catch(function (error) {
  console.log('error')
  // handle error
  console.log(error);
});

  //axios.get(options.url, )
    // axios.get({
    //   url: options.url,
    //   headers: options.headers// {'X-Requested-With': 'XMLHttpRequest'}
    // });
    // The options object has been provided to help you out,
    // but you'll have to fill in the URL
  };//



module.exports.getReposByUsername = getReposByUsername;
//axios.get('/user?ID=12345')
// .then(function (response) {
//   // handle success
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .then(function () {
//   // always executed
// });