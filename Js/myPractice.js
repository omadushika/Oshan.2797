/* my 1st practice
var name = "Oshan";
console.log(name);
var username = "H.T.A";
var abcd = true;
console.log(username + " " + name);
if (abcd) {
    console.log(username + " " + name);
}
else {
    console.log("sorry");
}
*/

/*
function addition(x, y) {
    return x + y;
 }

 console.log(addition(6, 8));
*/

/*
function fullName(a, b, c, d) {
    if (d){
        return a + " " + b + " " + c;
    }
    else {
        return "Sorry"
    }
}
console.log(fullName("H.T.A", "Oshan", "Madushika", false));
*/

/*
var pet1 = {name: "timmy", age: "10", color: "white"}
console.log(pet1);
console.log(pet1.name);
*/

/*
var car = new Array ("car1" , "car2", "car3");
console.log(car[1]);
car = [];
car.push('Oshan');
console.log(car);
*/

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

readline.question("what is your name?", function(name){
    console.log("hello " +name);
    readline.close();
})