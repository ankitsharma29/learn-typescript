function fun1(): string {
  //   return 100;    // error
  return "hello";
}

console.log(fun1());

function add(n1: number, n2: number): string {
  return `sum of ${n1 + n2}`;
}

console.log(add(54, 23));

const a = 101;
const b = "aniket";
function returnNum(): number {
  // return b;   // error
  return a;
}

console.log("returnNum() :", returnNum());


function sub (n1:number,n2:number):number {
  return n1-n2;
}

console.log("sub values:",sub(20,10));

