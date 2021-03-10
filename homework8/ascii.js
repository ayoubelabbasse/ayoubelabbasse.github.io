function selectAnimation(){
    var x = document.getElementById("selectAnimation").value;
    var xx = x.toUpperCase();
    document.getElementById("idanimation").innerHTML=ANIMATIONS[xx]
}
function selectSize(){
    var sizes={
        Medium:"12pt",
        Tiny:"7pt",
        Small:"10pt",
        Large:"16pt",
        ExtraLarge:"24pt",
        XXL:"32pt",
    }
    var x = document.getElementById("selectSize").value;
    if(x=="Medium"){
        document.getElementById("idanimation").style.fontSize=sizes["Medium"]
    }else if (x=="Tiny"){
        document.getElementById("idanimation").style.fontSize=sizes["Tiny"]
    }else if (x=="Small"){
        document.getElementById("idanimation").style.fontSize=sizes["Small"]

    }else if (x=="Large"){
        document.getElementById("idanimation").style.fontSize=sizes["Large"]

    }else if (x=="ExtraLarge"){
        document.getElementById("idanimation").style.fontSize=sizes["ExtraLarge"]

    }else if (x=="XXL"){
        document.getElementById("idanimation").style.fontSize=sizes["XXL"]

    }else {
        document.getElementById("idanimation").style.fontSize=sizes["Medium"]
    }

}

var timer;


function startAnimation(){
    document.getElementById("stop").disabled=false;
    document.getElementById("start").disabled=true;
    document.getElementById("selectAnimation").disabled=true;

animation(250);

}
var speed;
function animation(speed){
    var x= document.getElementById("selectAnimation").value
    var frame="";
    var arrayOfFrames=ANIMATIONS[x.toUpperCase()].split('=====')
    var k=0
    frame=arrayOfFrames[k];
    timer = window.setInterval(function(){

        k=k == arrayOfFrames.length?0:k;
        frame=arrayOfFrames[k];
        document.getElementById('idanimation').innerHTML = frame;
        k++;

    }, speed);
}
function stopAnimation(){

        window.clearInterval( timer );
    document.getElementById("stop").disabled=true;
    document.getElementById("start").disabled=false;
    document.getElementById("selectAnimation").disabled=false;

    selectAnimation()
}

function turbo(){
    if (document.getElementById("turbo").checked==true){
        clearInterval(timer)
        animation(50)
    }else{
        clearInterval(timer)
       animation(250)
    }

}