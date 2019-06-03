function fadeIn(c) {
$(c).attr("id", "fadeIn");
setTimeout(() => {
    fadeOut(c)
}, 3500);
};

function fadeOut(c) {
$(c).attr("id", "fadeOut");
setTimeout(() => {
    fadeIn(c)
}, 3500);
};

function nextInArray(arr) {
console.log(arr);
arr.push(arr.shift());
console.log(arr);
};

$(document).ready(fadeOut(".firstImage"));

var arr = [1,2,3,4];

$(document).ready(nextInArray(arr));