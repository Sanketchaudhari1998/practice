console.log(`------------------------------map Method------------------------------`);

const array=[1,35,5,46,7,8,5,9,6,8,44,66,33,55];
let result=array.map((element)=>{
   return element*element
});
console.log(result);
console.log(`------------------------------filter Method------------------------------`);

let result1=array.filter((element)=>{
   return element%2==0
});
console.log(result1);

console.log(`----------------------------reduce Method--------------------------------`);

const num =[10,8,2,5];
let sum=num.reduce((previous,current)=>{
      return previous*current
},4);
console.log(sum);

console.log(`------------------------------------------------------------------------`)