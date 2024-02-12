var width;
var height;

window.onresize=function(){
    check();
}


function check(){
    //windows
    if(document.documentElement.clientWidth <= 500){
        document.getElementById('home').style.display="none";
        document.getElementById('article').style.display="none";
        document.getElementById('forum').style.display="none";
        document.getElementById('more').style.display="none";
        document.getElementById('about').style.display="none";
        document.getElementById('mobile-top-right').style.display="block";
        document.getElementById('t1').style.fontSize="5vw";
        document.getElementById('t2').style.fontSize="3.5vw";
    }else if(document.documentElement.clientWidth > 500){
        document.getElementById('home').style.display="block";
        document.getElementById('article').style.display="block";
        document.getElementById('forum').style.display="block";
        document.getElementById('more').style.display="block";
        document.getElementById('about').style.display="block";
        document.getElementById('mobile-top-right').style.display="none";
        document.getElementById('t1').style.fontSize="45px";
        document.getElementById('t2').style.fontSize="25px";
    }
    //Android
}