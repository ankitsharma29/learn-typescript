"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function sub(x, y) {
    return x - y;
}
function mul(n1, n2) {
    return n1 * n2;
}
function msg(s1) {
    console.log(s1);
}
console.warn(add(10, 20));
console.warn(sub(4, 2));
console.warn(mul(4, 2.4123));
msg("Today, I am learning new language, TypeScript.");
