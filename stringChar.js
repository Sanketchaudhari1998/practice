function string(str, no) {
    //    let StrNo= str.charAt(no);
    let con="";
      for (let index = 0; index <=no; index++) {
          con = con+str.charAt(index)
        
          
      }
      console.log(con);
    
    }
    string("Welcome Guy's",2)

    // get first n elemnet of an array

   function array (arr , num){
    let concatArray = " "
    for (let index = 0; index < num; index++) {
        const element = arr[index];
        concatArray = concatArray+ element+ ","
        
    }
    let finalArray = concatArray.slice(0,-1)
    return finalArray

   }

   console.log(array([1,22,7,56,5,40], 3));