goindex();
var count = 20;
document.getElementById("time").innerHTML= count;
function goindex(){    
    console.log(count);    
    count -= 1;
    document.getElementById("time").innerHTML= count;
    if(count==0){
        location.href="http://localhost:54515/";                   
    }
    setTimeout("goindex()",1000);
}