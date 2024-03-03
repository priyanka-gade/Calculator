//get number
function num(n){
    let res = document.getElementById("inputval");
    res.value += n;
}

//operation 
function result(){
    let res = document.getElementById("inputval");
    res.value=eval(res.value);
}

//clear the displayed number
function remove(){
    let res = document.getElementById("inputval");
    res.value=" ";
}

//negative sign
function negative(){
    let res = document.getElementById("inputval");
    res.value= -res.value;
}

//remove one
function removeone(){
    let res = document.getElementById("inputval");
    res.value = res.value.slice(0,-1);
}