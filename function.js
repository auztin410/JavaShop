var arr = ["./assets/images/clear-coffee-cup.jpeg", "./assets/images/coffee-bean-pour.jpeg"];
var c = ".firstImage";
let i = 0;

function fadeIn() {
var img = nextInArray();
$(".firstImage").attr("src", img);
$(c).attr("id", "fadeIn");
setTimeout(() => {
    fadeOut(c)
}, 3500);
};

function fadeOut() {
$(c).attr("id", "fadeOut");
setTimeout(() => {
    fadeIn(c)
}, 3500);
};

function nextInArray() {
if(i === arr.length-1) {
    i = 0;
}
else {
    i++;
}
console.log(i);
return arr[i];
};

function autoCarousel() {
    $(c).attr("id", "fadeIn");
    setTimeout(() => {
    var img = arr[0];
    $(".firstImage").attr("src", img);
    fadeOut();
    }, 3500);

};



$(document).ready(autoCarousel());