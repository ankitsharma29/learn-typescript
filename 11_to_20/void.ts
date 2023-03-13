// void type function
function printData():void {
  console.log("hello world");
}
function todayDate() {
  const date = new Date();
  const today =
    date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear().toString().slice(-2);
  console.log(today);
}

function printData1(n1:number):void {
  console.log("ankit  sharma",n1);
  // return n1;
}

function todayDate1() {
  const date = new Date();
  const today =
    date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear().toString();
  console.log(today);
}

printData();
todayDate();

printData1(10);
todayDate1();