function getRndInteger(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) ) + min;
    document.write("Random Number Is : " + value ); 
    value++;
    y=value;
    document.write("<br />operators Increment(++) Random Number + 1 : " + value ); 
    value=value-1;
    value--;
    x=value;
    document.write("<br />operators Decrement(--) Random Number - 1 : " + value ); 
    document.write("<br /> x : " + x ); 
    document.write("<br /> y : " + y ); 
    var z = x * y;
    document.write("<br /> operation Multiplication           z=x*y : " + z ); 
    var h=x/y
    document.write("<br /> operation Division                 h=x/y : " + h ); 
    var g=x%y
    document.write("<br /> operation Modulus                  g=x%y : " + g ); 
  }


  var value = Math.random( );
  document.write("Random Number Is : " + value ); 
  value++;
  document.write("<br />Random Number + 1 : " + value ); 

  value=value-1;
value--;
  document.write("<br />Second Test Value : " + value ); 
  
  var value = Math.random( );
  document.write("<br />Third Test Value : " + value ); 
  
  var value = Math.random( );
  document.write("<br />Fourth Test Value : " + value ); 




function myFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("greeting1").innerHTML = greeting;
  }

