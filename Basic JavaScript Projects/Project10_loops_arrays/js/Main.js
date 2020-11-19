function myFunction() {//The while loop loops through a block of code as long as a specified condition is true.
  var text = "";
  var i = 0;
  while (i < 10) {
    text += "<br>The number is " + i;
    i++;
  }
  document.getElementById("Concatenate").innerHTML = text;
}
function myFunction1() {//for loop
  var text = "";
  var i;
  for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("Concatenate1").innerHTML = text;
}

function myFunction2() { //Click the button to return the value of the string object.
  var x=82;
  document.write(x);
    {
      var x=33;
      document.write("<br>"+x);

    }
  document.write("<br>"+x);
  
}



function cat(){
  var cat=[];
  cat[0]="Banana";
  cat[1]="Orange";
  cat[2]="apple";
  document.getElementById("cat").innerHTML="Array[2] = "+cat[2];
}
