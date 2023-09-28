$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: 'He luu Trang nhó!',
        text: 'Nhân dịp trung thu tớ có món quà muốn gửi tặng cậu.',
        imageUrl: '../img/gif1.gif',
        imageWidth: 270,
        imageHeight: 330,
        confirmButtonText:'Ukiee <3',
        confirmButtonColor:'#ef6a8a',
        background: 'url(../img/iput-bg.jpg)  no-repeat center center / cover',
        imageAlt: 'Custom image',
    }).then(function(){
        var audio = document.getElementById("myAudio");
        audio.play();
        $('.content').show(200);
    })
}

// switch button position
function switchButton() {
    var audio = new Audio('../sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('../sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = "  Yêu Công lắmmm <3333333333333333333";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

function nuochoa() {
    var audio = new Audio('../sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Chúc mừng cậu !!, phần quà của cậu là 1 lọ nước hoa Narciro <333. Cậu có điều gì muốn nhắn gửi tới tớ không ^^',
        html: true,
        width: 900,
        padding: '3em',
        html: "<img src='../img/nuoc-hoa.png' style='width: 250px;height: 280px;margin-bottom: 20px'>" +
            "<input type='text' class='form-control'  id='txtReason' onmousemove=textGenerate()  placeholder='Viết vào đây nhó !!'>",
        background:'url(../img/iput-bg.jpg)  no-repeat center center / cover',
        backdrop: `
              rgba(0,0,123,0.4)
              url("../img/giphy2.gif")
              left top
              no-repeat
              fixed; /* Sử dụng 'fixed' để tạo kích thước backdrop không thay đổi khi cuộn trang */
            `,
        showCancelButton: true,
        cancelButtonText: "Thôi ngại lém :<<",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi cho tớ <3'
    }).then((result) => {
            window.location = 'https://www.facebook.com/coaisat.tra/';
    })
}
function xitkhoang() {
    var audio = new Audio('../sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Chúc mừng cậu !!, phần quà của cậu là 1 chai xịt khoáng Evoluderm <333. Cậu có điều gì muốn nhắn gửi tới tớ không ^^',
        html: true,
        width: 900,
        padding: '3em',
        html: "<img src='../img/xit-khoang.jpg' style='width: 250px;height: 280px;margin-bottom: 20px'>" +
            "<input type='text' class='form-control'  id='txtReason' onmousemove=textGenerate()  placeholder='Viết vào đây nhó !!'>",
        background:'url(../img/iput-bg.jpg)  no-repeat center center / cover',
        backdrop: `
              rgba(0,0,123,0.4)
              url("../img/giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Thôi ngại lém :<<",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi cho tớ <3'
    }).then((result) => {
            window.location = 'https://www.facebook.com/coaisat.tra/';
    })
}

function son() {
    var audio = new Audio('../sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Chúc mừng cậu !!, phần quà của cậu là 1 thỏi son MAC, cậu chọn màu nào thì ibox tớ nhó <333. Cậu có điều gì muốn nhắn gửi tới tớ không ^^',
        html: true,
        width: 900,
        padding: '3em',
        html: "<img src='../img/son-mac.png' style='width: 250px;height: 280px;margin-bottom: 20px'>" +
            "<input type='text' class='form-control'  id='txtReason' onmousemove=textGenerate()  placeholder='Viết vào đây nhó !!'>",
        background:'url(../img/iput-bg.jpg)  no-repeat center center / cover',
        backdrop: `
              rgba(0,0,123,0.4)
              url("../img/giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Thôi ngại lém :<<",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi cho tớ <3'
    }).then((result) => {
        if (result.value) {
            window.location = 'https://www.facebook.com/coaisat.tra/';
        }
    })
}

// show popup
$('#yes').click(function() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Sử dụng câu lệnh if để xử lý kết quả
    if (randomNumber === 1) {
        nuochoa()
    } else if (randomNumber === 2) {
        xitkhoang()
    } else {
       son()
    }
})
