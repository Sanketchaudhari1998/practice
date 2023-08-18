console.log(`======= hollow square =======`);

let x = 5; // row or column count
// defining an empty string
let string1 = "";

for(let i = 0; i < x; i++) { // external loop
  for(let j = 0; j < x; j++) { // internal loop
    if(i === 0 || i === x - 1) {
      string1 += "*";
    }
    else {
      if(j === 0 || j === x - 1) {
        string1 += "*";
      }
      else {
        string1 += " ";
      }
    }
  }
  // newline after each row
  string1 += "\n";
}
// printing the string
console.log(string1);
