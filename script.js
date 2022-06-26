function convertToCelciusToFahrenh(tempInC) {
    const tempInF = tempInC*9/5+32;
     // return tempInC + "°C is " + tempInF + "°F"
     console.log (tempInC + "°C is " + tempInF + "°F")
   }
   
   convertToCelciusToFahrenh(30) 
   
   function convertToFahrenhToCelcius(tempInF) {
    const tempInC = (tempInF-32)*5/9;
    /* return tempInF + "°F is " + tempInF + "°C" */
     console.log(tempInF + "°F is " + tempInC + "°C")
   }
   convertToFahrenhToCelcius(56)