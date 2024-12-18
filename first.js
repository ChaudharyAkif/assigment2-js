function1 = () =>{
    let firststing = prompt("What is your name");
    let secondsting = prompt("Lucky Number");
    fullstrig = firststing + " "+ secondsting

    if(!firststing){
        alert("Enter the correct value")
    }
    document.getElementById("boxfrostat").innerHTML=firststing + secondsting;
    document.getElementById("boxOutput").innerHTML=fullstrig;
   alert(fullstrig)
}
function2 = () =>{
 firstname=prompt("what is your first name");
 
 if(!firstname){
     alert("Enter the correct statement")
     return;
    }
    lastname= prompt("what is your last name");
    fullName = firstname +" "+ lastname;
    fullName = fullName.toLowerCase();
    
    alert(fullName)
 document.getElementById("boxfrostat").innerHTML=" NAME can not change into lower case " + firstname + lastname;
 document.getElementById("boxOutput").innerHTML=fullName;

}
function3 = () =>{
let firstcalue = prompt("Enter the some value i can tell you that it is equal comparies operaors used || not") 
let secondvalue = prompt("Enter the some value i can tell you that it is equal comparies operaors udes || not")
 
 if((firstcalue ===secondvalue)){
    alert("Yes equal opeator are used")

 }
 else if (firstcalue=="" , secondvalue==""){
    alert("enter the value")
return; 
}
else if (isNaN(firstcalue,secondvalue)) {
        alert("you can enter in charchtera")
    } return;

}
 



function4 = () =>{

    let firstcalue = prompt("Enter the some Number i can tell you that it is notequal logial operaors used || not") 
    let secondvalue = prompt("Enter the some Number i can tell you that it is notequal logial operaors udes || not")
     
     if((firstcalue ===secondvalue || firstcalue == secondvalue)){
        alert("Yes equal equal opeator are used")
    
     }
     else if((firstcalue !=secondvalue || firstcalue !== secondvalue)){
        alert("Yes not equal opeator are used")
    
     }
     else if (!firstcalue){
        alert("enter the value")
    return; 
    }
    else if (isNaN(firstcalue,secondvalue)) {
            alert("you can enter in charchtera")
        } return;


}
function5 = () =>{

let age = prompt("Enter your Age")
let weigth = prompt("Enter your weigth")

if(age>=18 && weigth<=70){
    alert("You are Younge fit boy")
}
 else if(age>=18 && weigth>=70){
    alert("You are  fat  boy")
}
else{
    alert("You are Baby Boy")
}

document.getElementById("boxfrostat").innerHTML="age+ weigth "+age+" "+weigth ;
document.getElementById("boxOutput").innerHTML="your age is"+" "+ age+" Your weight is " +" "+weigth ;
}
function6 = () =>{
    let sum1num = prompt("You can enter Number only")
    
    if(isNaN(sum1num)){
        alert("you cannot enter number")
    }
    else if(!sum1num) (
        alert("Enter the value")
    )
else{
    alert("You enter Number is " + sum1num)

}

}
function7 = () =>{

let sum1num = prompt("Enter your user name")
let sum2num = prompt("Enter your password")

let  name = "akif";
let  password = "1621";
if(sum1num===sum1num && sum2num===password ){

    alert("Well come sir")
}
else if(sum1num !==name && sum2num !== password ){
alert("Enter the correct name and password")
}

else(
    alert("Enter the value")
)

}

function9=()=>{
    document.getElementById("boxfrostat").innerHTML="";

}
function10=()=>{
    document.getElementById("boxOutput").innerHTML="";
    
    
}

