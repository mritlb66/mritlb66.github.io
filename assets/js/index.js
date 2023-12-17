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
    var announcement = document.getElementById('announcement-time');
    element.innerHTML =  year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    announcement.innerHTML =  year + '-' + month + '-' + day;
}
setInterval('Time()', 1000);
//setInterval('console.clear()',1000);

function zhuye(){
    document.getElementById("details").style.display="none";
    document.getElementById("page-zhuye").style.display="block";
    document.getElementById("page-gongjuxiang").style.display="none";
}
function chushiye(){
    document.getElementById("details").style.display="block";
    document.getElementById("page-zhuye").style.display="none";
    document.getElementById("page-gongjuxiang").style.display="none";
}
function gongjuxiang(){
    document.getElementById("details").style.display="none";
    document.getElementById("page-zhuye").style.display="none";
    document.getElementById("page-gongjuxiang").style.display="block";
    setTimeout(function(){
        document.getElementById("page-gongjuxiang-title").innerHTML="箱";
    }, 500);
    setTimeout(function(){
        document.getElementById("page-gongjuxiang-title").innerHTML="具箱";
    }, 550);
    setTimeout(function(){
        document.getElementById("page-gongjuxiang-title").innerHTML="工具箱";
    }, 600);
}

// 创建一个 request 并分配一个 XMLHttpRequest 对象给它
var request = new XMLHttpRequest()

// 用 open() 方法打开一个新的连接，其中的参数需要指定请求类型为 GET，以及设置 API 端的 URL
request.open('GET', 'https://img.xjh.me/random_img.php', true)

request.onload = function () {
  // 访问 onload 函数中的数据
}

// 发送请求
request.send()


function cps(){
    location.href="666.html";
}