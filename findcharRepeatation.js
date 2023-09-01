function string (str){
    let count = 0
for (const iterator of str) {
    if (iterator === "t" || iterator === "T") {
        count = count + 1
    }

}
console.log(` t charachter available in string : ${str} for ${count} times`);
    

}
string("Sanket Chaudhari")
