var arr = ["./assets/images/clear-coffee-cup.jpeg", "./assets/images/coffee-bean-pour.jpeg"];
var c = ".firstImage";
let i = 0;

function fadeIn() {
$(c).attr("id", "fadeIn");
setTimeout(() => {
    fadeOut(c)
}, 3500);
};

function fadeOut() {
$(c).attr("id", "fadeOut");
var img = nextInArray();
console.log(img);
$(".firstImage").attr("src", img);
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
var img = arr[0];
$(".firstImage").attr("src", img);
fadeOut();
};

// $(document).ready(fadeOut(".firstImage"));



$(document).ready(autoCarousel());