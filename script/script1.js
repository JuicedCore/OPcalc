function add(a,b){
    return(a+b);
}
function sub(a,b){
    return(a-b);
}
function mul(a,b){
    return(a*b);
}
function div(a,b){
    return(a/b);
}
const ops = ["=","+","-","*","/"]
function operate(a,b,operator){
    if (operator =="+"){
        return(add(a,b));
    }
    else if (operator =="+"){
        return(sub(a,b));
    }
    else if (operator =="*"){
        return(mul(a,b));
    }
    else if (operator =="/"){
        return(div(a,b));
    }

}