var num=document.getElementById("num");


function countDown(){
				
    var time = document.getElementById("time");
    if(time.innerHTML == 0){
        document.getElementById("time").innerText = "-1";
        document.getElementById("time").style.display= "none";
        document.getElementById("but").innerText="Click on me to cps test😙";
        document.getElementById("but").style.display="none";
        document.getElementById("but-fake").style.display="block";
        alert("您的成绩："+cpsnum);
    }else{
        time.innerHTML = time.innerHTML-1;
    }
}
//1000毫秒调用一次
window.setInterval("countDown()",1000);

function func1(){
    document.getElementById("num").innerText="0";
    document.getElementById("time").innerText = "10";
    document.getElementById("time").style.display= "block";
    document.getElementById("but").innerText="Do what you can to complete the click quickly!😀";
    document.getElementById("but").style.display="block";
    document.getElementById("but-fake").style.display="none";
    cpsnum = 0
}
var cpsnum = 0;
function func2(){
    cpsnum++;
    console.log(cpsnum);
    document.getElementById("num").innerText=cpsnum;
}