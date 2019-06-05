var arr = [".firstImage", "secondImage"];

function fadeIn() {
nextInArray(arr);
var img = arr[0];
console.log(img);
$(img).attr("id", "fadeIn");
setTimeout(() => {
    fadeOut(img)
}, 3500);
};

function fadeOut(c) {
$(c).attr("id", "fadeOut");
nextInArray(arr);
setTimeout(() => {
    fadeIn(c)
}, 3500);
};

function nextInArray(arr) {
arr.push(arr.shift());
};

function autoCarousel() {
var img = arr[0];
fadeOut(img);
};

// $(document).ready(fadeOut(".firstImage"));



$(document).ready(autoCarousel());