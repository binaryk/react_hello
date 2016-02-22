var axios = require('axios');

function getRepos(username){
  return axios.get('https://api.github.com/users/'+username+'/repos');
};

function getUserInfo(username){
  return axios.get('https://api.github.com/users/'+username+'/repos');
}

var helpers = {
  getGitHubInfo: function(){
    return axios.all([getRepos(username), getUserInfo(username)])
        .then(function(arr){
          return {
            repos: arr[0].data,
            bio: arr[1].data
          };
        });
  }
}

var promiseObj = getRepos('binaryk');

promiseObj.then(function(data){
  console.log(data);
  
})

module.exports = helpers;