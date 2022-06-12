let Data = [];
/**
 * get
 * post
 * put
 * delete
 */

$('#melumatlari-getir').on('click', async function () {
    try {
        let x = await melumatlariGetir();
        CedveliGoster(x);
    }
    catch (error) {
        alert("melumatlar serverden oxuna bilmedi.tekrar yoxlayin")
    }
});

$('#container').on('click', '#sil', async function () {
    //let id=$(this).parent().find('.x').html();

    let kilidlidirmi = $(this).attr('data-kilid');

    if (kilidlidirmi == "1") {
        return;
    }

    $(this).attr('data-kilid', "1");

    let id = $(this).attr('data-id');

    try {
        let x = await melumatiSil(id);

        alert('melumat silindi');
        $('#melumatlari-getir').click();

        $(this).attr('data-kilid', "0");

    } catch (error) {
        alert('melumat siline bilmedi. daha sonra tekrar yoxlayin');
        $(this).attr('data-kilid', "0");
    }
})

$('#container').on('dblclick', '.id', async function () {
    let id = $(this).html();

    try {
        let obj = await melumatiGetir(id);

        let ul = `
            <ul id="list">
                <li>${obj.id}</li>
                <li id="list-name">${obj.name}</li>
                <li>${obj.email}</li>
                <li>${obj.gender}</li>
                <li>${obj.status}</li>
            </ul>
           `;

        $('#detay').empty().append(ul);

        $('#name').val(obj.name)
        $('#gender').val(obj.gender)
        $('#email').val(obj.email)
        $('#status').val(obj.status)

        $('#qeydet').attr('data-id', obj.id);


    } catch (error) {
        alert("melumat deyisdirile bilmedi. tekrar yoxlayin")
    }


});

$('#qeydet').on('click', async function () {
    let name = $('#name').val();
    let email = $('#email').val();
    let gender = $('#gender').val();
    let status = $('#status').val();
    let id = $('#qeydet').attr('data-id');

    let obj = {
        id,
        name,
        email,
        gender,
        status
    };

    try {
        if (id > 0) {
            // await melumatiDeyis(id,obj);
        } else {
            // await melumatElaveEt(obj);
        }

        alert('melumat qeyd olundu');
        $('#melumatlari-getir').click();

        $('input').each(
            function () {
                $(this).val('')
            }
        );

        $('#qeydet').attr('data-id', "0");


    } catch (error) {
        alert('melumat qeyd oluna bilmedi.tekrar yoxlayin.');
    }

});

$("#container").on('click', "#post", async function () {

    let id = $(this).attr('data-id');
    let postlar = await UserPosts(id);

    $('#container').empty();

    for (let i = 0; i < postlar.length; i++) {
        let post = postlar[i];

        let user = await UseriGetir(post.user_id);

        let postDivi = postDuzelt(post, user.name);

        $('#container').append(postDivi);
    }

});

$('#container').on('click', "#post-komment", async function () {

    let id = $(this).attr('data-id');

    let comments = await postComments(id);

    $('#postun-kommentleri').empty();

    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        let str = commentDuzelt(comment);

        $('#postun-kommentleri').append(str);

    }
})



