var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];


function changeImage() {
    alert("hej");
    var img = document.getElementById("imgClickAndChange");
    img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
}

/* document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        changeImage(-1) //left <- show Prev image
    } else if (e.keyCode == '39') {
        // right -> show next image
        changeImage()
    }
} */

function color() {
    alert("Hej");
}



