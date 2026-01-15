

//case 1

function a(){
    console.log(b);
}

var b=10;
a(); // it will print 10 because b is declared in global scope

//case 2

function b(){
    c();
    function c(){
        console.log(d);
    }
}
var d=20;
b(); // it will print 20 because d is declared in global scope

//case 3 

function d(){
    e();
    function e(){
        var e =30;
        console.log(e);
    }
}
var e=10;
d(); // it will print 30 because e inside function e() is accessed first due to scope chain


function f(){
    var f=10;
    g();
    function g(){
        console.log(f);
    }
}
f(); //
console.log(f);// it will throw an error because f is not defined in global scope

// In conclusion, JavaScript uses lexical scoping to determine variable accessibility based on their 
// physical placement in the code. Functions can access variables from their own scope and any outer scopes, 
// but not from inner scopes or sibling scopes.
//
// above f() function inside it we declare the var f which is local and also it is delcare and inside the function scope
// so when we try to access f outside the function it will throw an error because f is not defined in global scope

// but if var is declared inside the block scope with var key word then it will become global varible

if(true){
    var g=50;
    console.log(g); // it will print 50
}
console.log(g); // it will print 50 because var declared inside block with var keyword becomes global variable

// ok i get it now 

// when function is declare at that time it create a lexical scoping which means the function can access the varbile
// from the parent scope but not from the child scope or sibling scope

