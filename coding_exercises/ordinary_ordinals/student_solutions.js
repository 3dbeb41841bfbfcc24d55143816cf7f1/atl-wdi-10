//Morning Exercise: Paired Programming
//W06d01 January 9, 2017

//Group 1: [Alan Watson, Sophia Fazal, David Chua]

function numberToOrdinal(n) {
    var numLength = n.toString().length;
    var lastDigit = n.toString().charAt(numLength - 1) ;
    // if n is equal to 0 then return the number
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return "1" + "st";
    } else if (n == 2) {
      return "2" + "nd";
    } else if (n == 3) {
      return n + "rd";
    } else if (n >= 4) {
      return n + "th";
    }
    else if (lastDigit == "1"){
      return n + "st";
    }
  }

//========================================

//Group 2: [Alejandra Cajiao, Matt Martinez]
var numberToOrdinal = function (n){
var numArr = (n).toString().split('');
var numArrLength = numArr.length;
console.log(numArr, numArr.length);
if(numArr[numArr.length -1] == 1){
  return (n + 'st').toString();
}

else if (numArr[numArr.length -1] == 2){
   return (n + 'nd').toString();
}else if (numArr[numArr.length -1] == 3) {
  // if(n > 10 && n <   ){}
   return (n + 'rd').toString();
 }else {
  return (n + 'th').toString();
}
};
