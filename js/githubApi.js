var apiKey = require('./../.env').apiKey;

// exports.getInfo = function(username){
//   $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.getRepos = function(username){
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++)
       $("#showName").append("<li>" + response[i].name + "</li>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
exports.getDesc = function(username){
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++)
       $("#showDesc").append("<li>" + response[i].description + "</li>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
