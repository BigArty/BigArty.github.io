"use strict";

function getGroups(user_id) {
    var obj;
    VK.api("groups.get", {
        "user_id": user_id
    }, function (data) {
        obj = data;
    })
    return obj;
}

function saveUser(data, path) {
    $.ajax({
        url: path,
        async: false,
        dataType: 'text',
        data: data,
        method: 'POST'
    });
    return 0;
}

function loadUser(path) {
    var User;
    $.ajax({
        url: path,
        async: false,
        dataType: 'text',
        success: function (data) {
            User = data;
        }
    });
    return User;
}

function Vectorize(user_id) {

}
