function number(num){
    let sum=0
let strNum = num.toString()
for (const iterator of strNum) {
    let convertedStrNum = parseInt (iterator)
    sum = sum + convertedStrNum;
}
    console.log(`Sum of all digits in number ${num} is : ${sum}`);

}
number(123)
number(456)
number(6464)