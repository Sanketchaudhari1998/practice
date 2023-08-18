// sum of Cubes from 1 to 10
function cube (num){
    let countSum = 0
 for (let index = 1; index <= num; index++) {
    let element = index*index*index
    countSum = countSum + element
 }
 console.log(`Sum of Cubes till number ${num} is : ${countSum}`);
}
cube(10)