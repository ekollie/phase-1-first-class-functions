function testFunction(){
    console.log("This is a test function!")
}

function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return (function namedFunction (){
        console.log('This Function has been received!')
    })
}

function returnsAnAnonymousFunction(){
    return (() => {console.log("I am an anonymous function")})
}


testFunction();
receivesAFunction(testFunction)
returnsANamedFunction();
console.log(returnsAnAnonymousFunction())