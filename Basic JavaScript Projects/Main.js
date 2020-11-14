function myFunction() {//Click the button to join three strings into one new string
  var str1 = "Hello ";
  var str2 = "world!";
  var str3 = "<br>"+" Have a nice day!";
  var res = str1.concat(str2, str3);
  document.getElementById("Concatenate").innerHTML = res;
}
function myFunction1() {//Click the button to display the extracted part of the string
  var str = "Hello world!"; 
  var res = str.slice(3,8);
  document.getElementById("Concatenate1").innerHTML = res;
}

function myFunction2() { //Click the button to return the value of the string object.
  var str = "Hello World!";
  var res = str.toString();
  document.getElementById("Concatenate2").innerHTML = res;
  
}

function myFunction3() { //Click the button to display the formatted number
  var num = 13.3714;
  var a = num.toPrecision();
  var b = num.toPrecision(2);
  var c = num.toPrecision(3);
  var d = num.toPrecision(10);

  var n = a + "<br>" + b + "<br>" + c + "<br>" + d;
 
  document.getElementById("Concatenate3").innerHTML = n;
}