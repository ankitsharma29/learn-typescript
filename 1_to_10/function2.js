"use strict";
function checkType(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log("Both are numbers");
    }
    else {
        console.log(new Error("values are not numbers"));
    }
}
function checkTypeString(s1, s2) {
    if (typeof s1 === "string" && typeof s2 === "string") {
        console.log("Both are string");
    }
    else {
        console.log(new Error("values are not string"));
    }
}
checkType(10, "20");
checkType(10, 321.1223);
// check a value string or not
checkTypeString("ankit", "sharma");
