var hello = 'Hello';
let world ="Hello world";
const HelloWorld = "Hello world!!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(HelloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'Im global';
}

helloWorld();
console.log(globalVar);