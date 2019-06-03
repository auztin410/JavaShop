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

$(document).ready(fadeOut(".firstImage"));