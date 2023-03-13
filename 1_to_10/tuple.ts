let role: [string, number, boolean, number, string] = [
  "Ankit Sharma",
  22,
  true,
  30,
  "I am newly in typescript",
];

let rolesperson:[string,number,boolean] = [
  "Mayank sharma",
  23,
  false,

]

console.log(role);

role[0] = "hello";  // error
role[1] = 215;

console.log(role);


//rolesperson
console.log(rolesperson);
rolesperson[2] =true;
rolesperson[0]= 'mohit';

console.log(rolesperson);



