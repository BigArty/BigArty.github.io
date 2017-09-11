"use strict";

function getGroups(user_id) {
  var obj;
  VK.api("groups.get", {
    "user_id": user_id
  }, function(data) {
    obj = data;
  })
  return obj;
}

function saveUser(data, path) {
  $.ajax({
    url: path,
    async: true,
    dataType: 'text',
    data: data,
    method: 'POST'
  });
}

function loadUser(path) {
  var User;
  $.ajax({
    url: path,
    async: true,
    dataType: 'text',
    success: function(data) {
      User = data;
    }
  });
  return User;
}

function Vectorize(user_id) {

}
