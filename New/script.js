/*
Javascript is a famous programming language and it is used for developing interactive and dynamic web pages. 
It is called the language of web.
It is a interpreter based language.
It is single threaded. 
*/
var userAge=59
var userName="Raj"
console.log(userAge)
console.log(userName)

//Operators
var num1=100
var num2=20
console.log("Add:",num1+num2)
console.log("Sub:",num1-num2)
console.log("Multi:",num1*num2)
console.log("Div:",num1/num2)

//Datatype
var num=33
var name="ramu"
var light=true
var xyz=null

//arrays
const no=[2,"xyz",333,true]
console.log(no)

//function
function greetUser(names){
    var names="Sita"
    console.log(names)
}
greetUser("Sita")

//if-else
var tempreature=35
if(tempreature>30){
    console.log("High temp")
}
else{
    console.log("Low temp")
}

//for loop
for(var i=1;i<6;i++){
    console.log(i)
}

//loose equality
let a=20
let b="20"
if(a==b){
    console.log("true")
}
else{
    console.log("false")
}

//strict equality
let x=20
let y="20"
if(x===y){
    console.log("true")
}
else{
    console.log("false")
}