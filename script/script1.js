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
function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
String.prototype.count=function(c) { 
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
  };
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
function cleardisplay(){
    screenq.innerText = "0";
}
function displayfunc(element){    
    if(screenq.innerText == "0"){
        screenq.innerText = element.innerText;
        console.log("Sayless bro")
    }
    else if (symbcount <2 ){
        screenq.innerText += element.innerText;
        symbcount = (screenq.innerText).count("+")+(screenq.innerText).count("-")+(screenq.innerText).count("/")+(screenq.innerText).count("*")+(screenq.innerText).count("%")+2*(screenq.innerText).count("=")
        if(symbcount>=2){
            if(screenq.length>14){
                let a = document.createElement("Warning")
                let b = document.a.classList.add("Number-Overflow")
                b.innerText = "WARNING NUMBERS MAY OVERFLOW";
                document.appendChild(b);
            }
            console.log(screenq.innerText);
            const [result, last] = calculator(screenq.innerText);
            finalresult = result + last;
            if(finalresult.length<15){
            screenq.innerText = finalresult
            }
            else{
                screenq.innertext = finalresult.slice(0,14)
            }
            symbcount = 0
        }
    }
    
}
let symbcount =0;
screenq = document.querySelector(".screen");
let display = document.querySelectorAll(".disp")
let ac = document.querySelector(".AC")
let equalq = document.querySelector("#equals")
for(let i=0;i<display.length;i++){
    display[i].addEventListener("click",()=>displayfunc(display[i]))
}
ac.addEventListener("click", cleardisplay)

function calculator(string){
    last_sign = string.slice(-1)
    let lasht = ""
    if (last_sign!="="){
        lasht = last_sign
    }
    parsable_string = string.slice(0,-1)
    let b=[];
    if (countString(screenq.innerText,"+")>0){
        b = parsable_string.split("+");
        return([add(Number(b[0]),Number(b[1])),lasht]);
    }
    else if(countString(screenq.innerText,"-")>0){
        b = parsable_string.split("-");
        return([sub(Number(b[0]),Number(b[1])),lasht]);
    }
    else if(countString(screenq.innerText,"*")>0){
        b = parsable_string.split("*");
        return([mul(Number(b[0]),Number(b[1])),lasht]);
    }
    else if(countString(screenq.innerText,"/")>0){
        b = parsable_string.split("/");
        return([div(Number(b[0]),Number(b[1])),lasht]);
    }
}
