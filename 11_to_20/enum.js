"use strict";
var Languages;
(function (Languages) {
    Languages[Languages["C"] = 0] = "C";
    Languages[Languages["C++"] = 1] = "C++";
    Languages[Languages["Java"] = 2] = "Java";
    Languages[Languages["PHP"] = 3] = "PHP";
    Languages[Languages["JS"] = 4] = "JS";
    Languages[Languages["Python"] = 5] = "Python";
})(Languages || (Languages = {}));
console.log(Languages);
console.log(Languages.Java); // 2
console.log(Languages[0]); //C
console.log(Languages[4]); //JS
var programmingauthor;
(function (programmingauthor) {
    programmingauthor[programmingauthor["ankit sharma"] = 0] = "ankit sharma";
    programmingauthor[programmingauthor["aniket jain"] = 1] = "aniket jain";
    programmingauthor[programmingauthor["mohit"] = 2] = "mohit";
    programmingauthor[programmingauthor["ram"] = 3] = "ram";
})(programmingauthor || (programmingauthor = {}));
console.log(programmingauthor);
console.log("programmingauthor", programmingauthor[2], " \nprogrammingauthor index", programmingauthor.ram);
