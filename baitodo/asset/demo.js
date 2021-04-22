console.log('HELLO');
var i = 0;

$(document).ready(() => {
    fetch("/api/task")
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            data.data.forEach((item) => {
                console.log(item);
                $('.dstodo').append(`
            <div class="${item.id}">            
            <p>name: ${item.name}</p>
            <p>status: ${item.status}</p>
            <button onclick="fixcontent.call(this)">FIX</button>
            <button onclick="delete1.call(this)">DELETE</button>
            </div>
            `)
            })
        })
})
$('button[name=getbt]').click(() => {
    fetch('/api/task')
        .then((data) => data.json())
        .then((data) => console.log(data));
})
$('button[name=bttodo]').click(() => {
    i++;
    var tencv = $('.tencv').val();
    var noidungcv = $('.noidungcv').val();
    fetch('/api/task', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name: tencv,
            status: noidungcv
        })
    })
        .then((data) => data.json())
        .then((data) => {
            console.log(data.data[i].id)
            $('.dstodo').append(`
   <div class="${data.data[i].id}">            
   <p>name: ${tencv}</p>
   <p>status: ${noidungcv}</p>
   <button onclick="fixcontent.call(this)">FIX</button>
   <button onclick="delete1.call(this)">DELETE</button>
   </div>
   `)
        })


})
function delete1() {
    console.log($(this).parent()[0].className)
    $(this).parent().remove();
    fetch('/api/task/' + $(this).parent()[0].className, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch(err => {
            console.log(err)
        })
}

function fixcontent() {
    var noiDung1 = $(this).siblings().first().html()
    var noiDung2 = $(this).siblings(':nth-child(2)').html()
    console.log(noiDung1)
    console.log(noiDung2)
    fetch('/api/task/' + $(this).parent()[0].className, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((data) => {
            $(this).siblings(':nth-child(1)').remove();
            $(this).siblings(':nth-child(2)').remove();
            console.log($(this));
            $(this).parent().append('<input class = "suanoidung1"  type="text"> ');
            $(this).parent().append('<input class = "suanoidung2" type="text"> ');
            $('.suanoidung1').val(noiDung1);
            $('.suanoidung2').val(noiDung2);
            $(this).replaceWith('<button class="hoanThanh" onclick="done.call(this)">Done</button>');
            console.log(data)
        })
}

function done() {
    var noiDungMoi1 = $(this).siblings().first().val();
    var noiDungMoi2 = $(this).siblings(':nth-child(2)').html()
    console.log(noiDungMoi1);
    console.log(noiDungMoi2);
    $(this).parent().append(`
    <div class="${data.data[i].id}">
    <p>name: ${noiDungMoi1}}</p>
    <p>status: ${noiDungMoi2}</p>
    <button  onclick="fixcontent.call(this)">FIX</button>
    <button  onclick="delete1.call(this)">DELETE</button>    
    </div>
    `);
    $(this).remove()
}
