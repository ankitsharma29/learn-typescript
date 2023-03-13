const person1: { name: string; age: number } = {
  name: "Ankit Sharma",
  age: 22,
};


type objectType = { name: string; age: number };


const person2: objectType = {
  name: "Aniket Jain",
  age: 23,
};

type objectType1 = {name:string,age:number};
const person3: objectType1 = {
  name: "mayank sharma",
  age: 21,
};

const age :{age1:number,age2:number} = {
  age1 : 22,
  age2 : 23
}


console.log("Person1 Data :", person1);
console.log("Name of person1 :", person1.name);
console.log("Age of person1 :", person1.age);
console.log("Age of person1 :", age.age1);

console.log("\nPerson2 Data :", person2);
console.log("Name of person2 :", person2.name);
console.log("Age of person2 :", person2.age);
console.log("Age of person2 :", age.age2);

console.log("\nPerson3 Data :", person3);
console.log("Name of person3 :", person3.name);
console.log("Age of person3 :", person3.age);
