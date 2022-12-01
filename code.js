// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello
function sayHello(input){
    // if(input === undefined || input === true || input === false)
    if (typeof input !== "string"){
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}


//isFive
function isFive(input){
    return input == 5;
}