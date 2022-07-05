// Arrow functions

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Nichole");

var sayHello2 = function(name, name2) {
    console.log("Hello again " + name + " and " + name2);
}

sayHello2("Nichole", "Mendy");

const greet = (name) => {
    console.log("Hello from greet " + name);
};

greet("Nichole");

const greet2 = name => console.log("Hello from greet2 " + name);

greet2("Nichole");