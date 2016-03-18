var apiKey = require('./../.env').apiKey;
var git = require('./../js/githubApi.js');

$(document).ready(function() {
  $("#submitUsername").click( function() {
    var username = $("#inputUsername").val();
    $('.colTitles').show();
    $('.name').prepend("<h2>Respository Names</h2>");
    $('.desc').prepend("<h2>Respository Descriptions</h2>");
    git.getRepos(username);
    git.getDesc(username);
  });
});
