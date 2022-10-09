var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});


readline.question("what is your city?", function(city){
    if (city === "colombo") {
        console.log("high risk area");
    }
    else if (city === "galle") {
        console.log("low risk area");
    }
    else if (city === "gampaha") {
        console.log("low risk area");
    }
    else {
        console.log("incorrect city")
    }
    console.log("stay safe")
    readline.close();
})
