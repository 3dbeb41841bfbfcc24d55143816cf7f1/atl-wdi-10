function numberToOrdinal(n) {
  if ( n === 0 ) return '0';
  if ( n % 100 > 10 && n % 100 < 14){
    return n + "th";
  } else if ( n % 10 === 1){
    return n + "st";
  } else if (n % 10 === 2 ){
    return n + "nd";
  } else if (n % 10 === 3){
    return n + "rd";
  } else {
    return n + "th";
  }
}

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  numberToOrdinal : numberToOrdinal
};
