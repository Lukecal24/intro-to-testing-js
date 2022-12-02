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


//isEven
function isEven(input){
    return (input % 2 === 0 || parseInt(input) % 2 === 0) && input !== false;
}

//isVowel
function isVowel(input){
    if(typeof input ==="string"){
        input = input.toLowerCase();
        if('aeiou'.indexOf(input) !== -1)
            return true;
    }
    return false;
}

//add
function add(){

}