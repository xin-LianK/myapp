function say(world) {
    console.log(world);
}

function execute(someFunction, value) {
    someFunction(value);
}

// execute(say, "Hello");

execute(function (world) {
    console.log(world);
}, "Hello");