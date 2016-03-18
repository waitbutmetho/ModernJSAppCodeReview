var apiKey = require('./../.env').apiKey;
var git = require('./../js/githubApi.js');

$(document).ready(function() {
  $("#submitUsername").click( function() {
    var username = $("#inputUsername").val();
    $('.colTitles').show();
    git.getRepos(username);
    git.getDesc(username);
  });
});
