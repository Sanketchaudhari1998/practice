// sum of squares from 1 to 10
function square (num){
    let countSum = 0
 for (let index = 1; index <= num; index++) {
    let element = index*index
    countSum = countSum + element
 }
 console.log(`Sum of squares till number ${num} is : ${countSum}`);
}
square(10)