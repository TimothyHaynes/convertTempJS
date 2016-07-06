// var tempFa = window.prompt("Convert F to C");
//   document.write((tempFa - 32) * (5/9));
//
// var tempC = window.prompt("Convert C to F");
//   document.write((parseInt(tempC) * 9/5) + (32));

// var temp = prompt('Input temperature (only numbers)');
// var degree = prompt('Input the degree you want to convert (only use F,f,C,c)');
console.log('begin');

var temp;
var degree;

function convertTemp(temp,degree) {
  // var temp = prompt('Input temperature (only numbers)');
  // var degree = prompt('Input the degree you want to convert (only use F,f,C,c)');
  if (degree == "f") {
    temp = temp * (9/5) + 32;
    document.write(temp + "F" + "<br>");
  }
  else if (degree == "c") {
    temp = (temp - 32) * (5/9);
    document.write(temp + "C" + "<br>");
  }
}

convertTemp(212,"c");
convertTemp(32,"c");
convertTemp(65,"c");
convertTemp(-40,"f");

console.log('end');
