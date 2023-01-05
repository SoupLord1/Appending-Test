//vars
//var textToggle = 0;
var marginLeft = 0;
var marginTop = 0;
var marginToggle1 = 1;
var marginToggle2 = 1;
var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;
//consts
const disc = document.getElementById('cd');

//setInterval(changeTest, 1000);
setInterval(moveH, 1);
setInterval(moveV, 1);
setInterval(checkScreenSize, 1);

//functions
/*function changeTest() {
    if (textToggle == 0) { disc.innerText = 'This is a Test!';
        textToggle = 1;
        return;
    }
    else { disc.innerText = 'Hello';
        textToggle = 0;
        return;
    }
}*/
function checkScreenSize() {
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
}

function moveV() {
    if (marginTop == -10) {
        marginToggle1 = 1;
    }
    else if (marginTop == screenHeight - 100) {
        marginToggle1 = -1;
    }
    marginTop += marginToggle1;
    disc.style.marginTop = marginTop + 'px';
}

function moveH() {
    if (marginLeft == -10) {
        marginToggle2 = 1;
    }
    else if (marginLeft == screenWidth - 100) {
        marginToggle2 = -1;
    }
    marginLeft += marginToggle2;
     disc.style.marginLeft = marginLeft + 'px';
}
