var mw;
var scrollFunc = function(e) {
    var e = e || window.event;
    if(e.wheelDelta) {   
          if(e.wheelDelta > 0) {     //当鼠标滚轮向上滚动时
                mw = 1;
                mwcheck();
          }
          if(e.wheelDelta < 0) {     //当鼠标滚轮向下滚动时
                mw = 0;
                mwcheck();
          }
    } else if(e.detail) {
          if(e.detail < 0) {   //当鼠标滚轮向上滚动时
                mw = 1;
                mwcheck();
          }
          if(e.detail > 0) {   //当鼠标滚轮向下滚动时
                mw = 0;
                mwcheck();
          }
    }
}
window.addEventListener("mousewheel", scrollFunc);

function mwcheck(){
    if(mw == 1){
        scrollcheck();

    }else if(mw == 0){
        document.getElementById("top").style.position="absolute";
        document.getElementById("top").style.animation="none 1s ease-in-out";
        document.getElementById("top").style.backgroundColor="#31313100";
    }
}



function scrollcheck(){
    window.addEventListener('scroll',function scrollcheck(e){
        var scrolltop = this.window.scrollY;
        if(scrolltop == 0){
            document.getElementById("top").style.backgroundColor="#31313100";   
        }else if(mw == 1){
            document.getElementById("top").style.position="fixed";
            document.getElementById("top").style.animation="topfixed 0.5s ease-in-out";
            document.getElementById("top").style.backgroundColor="#31313152";
        }
        if(scrolltop >= 814){
            $("#body" ).css("overflow-style","block");
        }else if(scrolltop < 814){
            $("#body").css("overflow-style","none");
        } 
    })
}    


window.onload = function(){
    getid();
}


var id;
function getid(){
    document.onmousemove = function(){
        id = document.getElementById("idname").innerText = event.srcElement.id;
        topbutcheck();
    }
} 



