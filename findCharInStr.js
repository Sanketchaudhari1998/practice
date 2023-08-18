function searchingChar(str,char) {
    let count = 0
    var charUp = char.toUpperCase()
    var charLp = char.toLowerCase()
    for (let index = 0; index < str.length; index++) {
        let strChar = str.charAt(index) 
        if (strChar==charUp || strChar==charLp) {
            count++
        }     
    }
    return count
}
console.log(searchingChar('Hi I am Sanket Chaudhari from Jalgaon and I belongs to College of Food Technology Naigaon','A'));