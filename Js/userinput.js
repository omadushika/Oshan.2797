var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

readline.question("what is your name?", function(name){
    console.log("hello " +name);
    readline.close();
})

readline.question("what is your age?", function(age){
    console.log("welcome, your age entered is " +age);
    readline.close();
})