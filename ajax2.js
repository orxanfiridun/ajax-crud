$.ajaxSetup({
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer a2e6c995dc5e8dfd31a0aab93fe655b22a6e39a1f377051d162c65155297e040');
    },
});

let melumatlariGetir = function () {
    return $.ajax({
        url: 'https://gorest.co.in/public/v2/users/',
        method: 'get',
    });
}

let melumatiDeyis = function (id, obj) {
    return $.ajax({
        url: 'https://gorest.co.in/public/v2/users/' + id,
        method: 'put',
        data: obj
    });
}

let melumatiSil = function (id) {
    return $.ajax({
        url: 'https://gorest.co.in/public/v2/users/' + id,
        method: 'delete',
    });
}

let melumatElaveEt = function (obj) {
    return $.ajax({
        url: 'https://gorest.co.in/public/v2/users/',
        method: 'post',
        data: obj
    });
}

let UseriGetir = function (id) {
    return $.ajax({
        url: 'https://gorest.co.in/public/v2/users/' + id,
        method: 'get',
    });
}

let UserPosts = function (id) {
    return $.ajax({
        url: link("/public/v2/users/" + id + "/posts"),
        method: 'get',
    });
}
let postComments = function (id) {
    return $.ajax({
        url: link("/public/v2/posts/" + id + "/comments"),
        method: 'get',

    })
}




