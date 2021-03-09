function myFunction() {
    setInterval(bigger, 500);
}

function bigger() {
    var fSizeElem = document.getElementById("text").style.fontSize;
    if(fSizeElem == "")
        var fSize = 12;
    else var fSize = parseInt(fSizeElem);
    document.getElementById("text").style.fontSize = (fSize + 2) + "pt";
}

function newFunction() {
    var box = document.getElementById("myCheck");
    document.getElementById("text").style.fontWeight = "bold";

    if(box.checked) {
        document.getElementById("text").style.color = "green";
        document.getElementById("text").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('hundred.jpg')";
    }else {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.fontSize = "12pt";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}