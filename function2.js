// There are 4 types of function--
// 1 Do Something / No Parameters
// 2 Do Sometrhing / With Params
// 3 Return Somethin / No Params
// 5 Return Something / With Params

// 7 Example
function sayHello(){
    console.log("Hello, World.")
}

sayHello () // calls the function

// 8 Example

function greetFriend(name) {
    console.log("Hello, " + name)
}

greetFriend('Joe') // should console.log "Hello, Joe"

// 9. Example

function addTwoPlusTen(){
    const result = 2 + 10
    return result
}
// another example below whicherver is easyier for you
function addTwoPlusTen(){
    return 2 + 10
}

// how to call the function
const answer = addTwoPlusTen() // the answer is 12

console.log(answer)

// 10. Example (4)

function addTwoNumber(a,b){
    const result = a + b 
    return result
}
