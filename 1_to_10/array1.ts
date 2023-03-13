let arr: string[] = ["c", "c++", "java", "php", "js", "ts"];

console.log(arr);
console.log(arr[1]);

let arr2: any[] = [123, true, "ankit", { name: "ankit", age: 22 }];

console.log(arr2[3].name);

arr2.push("Hello world"); //add element in array
console.log(arr2);
