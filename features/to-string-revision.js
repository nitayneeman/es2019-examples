// User-defined function object
// This prints "function () { console.log('My Function!'); }"
console.log(function () { console.log('My Function!'); }.toString());

// Build-in function object
// This prints "function parseInt() { [native code] }"
console.log(Number.parseInt.toString());

// Bound function object
// This prints "function () { [native code] }"
console.log(function () { }.bind(0).toString());

// Built-in callable function object
// This prints "function Symbol() { [native code] }"
console.log(Symbol.toString());

// Dynamically generated function object #1
// This prints "function anonymous() {}" (using V8 engine)
console.log(Function().toString());

// Dynamically generated function object #2
// This prints the followng (using V8 engine):
// function () { return __generator(this, function (_a) {
//     return [2 /*return*/];
// }); }
console.log(function* () { }.toString());

// This throws a TypeError: "Function.prototype.toString requires that 'this' be a Function"
// Function.prototype.toString.call({});