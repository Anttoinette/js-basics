
function sayHello (firstName = "Stranger") {
    console.log("hey there, " + firstName);
}

sayHello("Anttoinette");

function sumAdd (x=0, y=0) {
    let sum = x + y;
    return sum;
}

console.log( sumAdd("A", 100,1) );
