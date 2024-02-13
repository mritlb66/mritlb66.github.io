


var id;
function getid(){
    document.onmousemove = function(){
        id = document.getElementById("idname").innerText = event.srcElement.id;
        topbutcheck();
    }
} 


//windows
function topbutcheck(){
    if(id == "home"| id == "homeimg"){
        document.getElementById("homeimg").className = "fa-solid fa-house fa-bounce";
    }else if( id != "home"|id != "homeimg"){
        document.getElementById("homeimg").className = "fa-solid fa-house";
    }
    if(id == "article"| id == "articleimg"){
        document.getElementById("articleimg").className = "fa-regular fa-newspaper fa-bounce";
    }else if( id != "article"|id != "articleimg"){
        document.getElementById("articleimg").className = "fa-regular fa-newspaper";
    }
    if(id == "forum"| id == "forumimg"){
        document.getElementById("forumimg").className = "fa-solid fa-comments fa-bounce";
    }else if( id != "forum"|id != "forumimg"){
        document.getElementById("forumimg").className = "fa-solid fa-comments";
    }
    if(id == "more"| id == "moreimg"){
        document.getElementById("moreimg").className = "fa-solid fa-bars fa-bounce";
    }else if( id != "more"|id != "moreimg"){
        document.getElementById("moreimg").className = "fa-solid fa-bars";
    }
    if(id == "about"| id == "aboutimg"){
        document.getElementById("aboutimg").className = "fa-solid fa-circle-info fa-bounce";
    }else if( id != "about"|id != "aboutimg"){
        document.getElementById("aboutimg").className = "fa-solid fa-circle-info";
    }




//Android    
    if(id == "mobile-home"| id == "homeimg"){
        document.getElementById("mobile-homeimg").className = "fa-solid fa-house fa-bounce";
    }else if( id != "mobile-home"|id != "homeimg"){
        document.getElementById("mobile-homeimg").className = "fa-solid fa-house";
    }
    if(id == "mobile-article"| id == "articleimg"){
        document.getElementById("mobile-articleimg").className = "fa-regular fa-newspaper fa-bounce";
    }else if( id != "mobile-article"|id != "articleimg"){
        document.getElementById("mobile-articleimg").className = "fa-regular fa-newspaper";
    }
    if(id == "mobile-forum"| id == "forumimg"){
        document.getElementById("mobile-forumimg").className = "fa-solid fa-comments fa-bounce";
    }else if( id != "mobile-forum"|id != "forumimg"){
        document.getElementById("mobile-forumimg").className = "fa-solid fa-comments";
    }
    if(id == "mobile-more"| id == "moreimg"){
        document.getElementById("mobile-moreimg").className = "fa-solid fa-bars fa-bounce";
    }else if( id != "mobile-more"|id != "moreimg"){
        document.getElementById("mobile-moreimg").className = "fa-solid fa-bars";
    }
    if(id == "mobile-about"| id == "aboutimg"){
        document.getElementById("mobile-aboutimg").className = "fa-solid fa-circle-info fa-bounce";
    }else if( id != "mobile-about"|id != "aboutimg"){
        document.getElementById("mobile-aboutimg").className = "fa-solid fa-circle-info";
    }
}

function listA(){
    document.getElementById("list-but").style.width="140px";
    document.getElementById("list-but").style.animation="listbut-1 0.35s ease-in-out";
}
function listB(){
    document.getElementById("list-but").style.width="70px";
    document.getElementById("list-but").style.animation="listbut-2 0.35s ease-in-out";
}
//Android

