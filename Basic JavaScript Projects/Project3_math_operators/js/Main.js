function getRndInteger(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) ) + min; //Every time you click the button, getRndInteger(min, max) returns a random number between 1 and 10 (both included):

    document.write("Random Number Is : " + value ); //Will write  random number
    x=value;
    value++; // random number +1
    y=value; // add new number to y
    document.write("<br />operators Increment(++) Random Number + 1 : " + value ); //write random number+1
    x--; //random number -1
    document.write("<br />operators Decrement(--) Random Number - 1 : " + x ); 
    document.write("<br /> x : " + x ); // assign the random number -1 to x
    document.write("<br /> y : " + y );  // assign the random number +1 to y
    var z = x * y;
    document.write("<br /> operation Multiplication           z=x*y : " + z );  // assign the x*y to z
    var h=x/y
    document.write("<br /> operation Division                 h=x/y : " + h );  // assign the x/y to h
    var g=x%y
    document.write("<br /> operation Modulus                  g=x%y : " + g );  // assign the x%y to g
  }


function myFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("greeting1").innerHTML = greeting; // display a time-based greeting
  }

