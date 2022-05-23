let count = 0;

document.getElementById("increase").onclick= function(){
    count = count +1;
    document.getElementById("CounteLabel").innerHTML = count;
}

document.getElementById("decrease").onclick= function(){
    if(count >0){
        count = count -1;
    document.getElementById("CounteLabel").innerHTML = count;
    }
    
}

document.getElementById("reset").onclick= function(){
    count = 0;
    document.getElementById("CounteLabel").innerHTML = count;
}


