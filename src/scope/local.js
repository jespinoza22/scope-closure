const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = 'im global';
const functionScope = () => {
    var scope = 'im just a local';
    const fun = () => {
        return scope;
    }
    console.log(fun());
}

functionScope();
console.log(scope);