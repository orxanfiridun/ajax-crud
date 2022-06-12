function Cedvel() {
    let x = `
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>AD</th>
                <th>EMAIL</th>
                <th>CINS</th>
                <th>STATUS</th>
                <th>SIL</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
    `;

    return x;
}

function CedveliGoster(array) {
    let table = Cedvel();

    $('#container').empty().append(table);

    for (let i = 0; i < array.length; i++) {
        let obj = array[i];
        let setir = TR(obj);
        $('tbody').append(setir);
    }

}

function TR(obj) {
    let x = `
        <tr>
            <td class="id">${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td>${obj.gender}</td>
            <td>${obj.status}</td>
            <td id="sil"  data-id="${obj.id}" data-kilid="0"  >X</td>
            <td id="post" data-id="${obj.id}"  >Postlar</td>
            
        </tr>
    `;

    return x;
}

function link(url) {
    return "https://gorest.co.in" + url
}

function postDuzelt({ title, body, id }, userName) {

    return `
        <div class="post">
            <h6>${userName}</h6>
            <h5>${title}</h5>
            <p>${body}</p>

            <button id="post-komment" data-id="${id}">Kommentler</button>

            <div id="postun-kommentleri"></div>
        </div>
    `;
}

function commentDuzelt(comment) {
    return `
    <div class="comment">
    <span>${comment.name}</span>
    <p>${comment.body}</p>
    </div>
    
    
    `
}