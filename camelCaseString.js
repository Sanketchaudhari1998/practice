function toCamelCase(inputString) {
    let camelCaseString = "";
    let capitalizeNext = false;
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (char === " " ) {
        capitalizeNext = true;
      } else {
        if (capitalizeNext) {
          camelCaseString += char.toUpperCase();
          capitalizeNext = false;
        } else {
          camelCaseString += char.toLowerCase();
        }
      }
    }
  
   console.log(camelCaseString);
}
 toCamelCase("ShIvAji UniveRsiTy KoLhaPur");
 toCamelCase("ViShwajEet vAsaNtraO JAmDadE");
