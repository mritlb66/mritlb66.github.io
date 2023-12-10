//时间显示
function Time(){
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;    
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var element = document.getElementById('time');
    element.innerHTML =  year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
setInterval('Time()', 1000);
//setInterval('console.clear()',1000);

function zhuye(){
    document.getElementById("details").style.display="none";
    document.getElementById("page-zhuye").style.display="block";
}
function chushiye(){
    document.getElementById("details").style.display="block";
    document.getElementById("page-zhuye").style.display="none";
}