//Q.1
function time(){
    let date = new Date();
    document.write(date)
}
time()

//Q.2
function greets(firstName,lastName){
  var firstName = "Bilal";
    var lastName = "Ahmed";

    console.log(firstName +" "+ lastName);

}greets()

//Q.3
function user(){
    var user = +prompt("Enter your number")
    var user2 = +prompt('Enter your number')
    document.write(user + user2)
}user()

//Q.4
function userInput(){
    var usernum = +prompt("Enter your first number")
    var opretor = prompt("Enter your opreator")
    var usernum2 = +prompt("Enter your second number")

if(opretor == "+"){
    var result = usernum + usernum2;
    document.write(result)
}else if(opretor == "-"){
    var result = usernum - usernum2;
    document.write(result)
}
else if(opretor == "*"){
    var result = usernum * usernum2;
    document.write(result)
}
else if(opretor == "/"){
    var result = usernum / usernum2;
    document.write(result)
}
else if(opretor == "%"){
    var result = usernum % usernum2;
    document.write(result)
}
}userInput()