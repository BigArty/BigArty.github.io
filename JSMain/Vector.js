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

function Vectorize(user_id) {

}
