var y = 10; //assign the value 10 to y , he value is assigned inside a function

function My_Function1() { //defining  a function name
  y += 5;//add 5 to y

  document.getElementById("Concatenate1").innerHTML="y+5="+y; //result with "Concatenate1" id
}

function My_Function2() { //defining  a function name
  var x = 10; //assign the value 10 to x , he value is assigned inside a function
  x += 5;//add 5 to x
  document.getElementById("Concatenate2").innerHTML="x+5="+x; //result with "Concatenate2" id

}

function My_Function3() { //defining  a function name
  var x = 10; //assign the value 10 to x , he value is assigned inside a function
  z=x*y      // change result but change result of function1
  document.getElementById("Concatenate3").innerHTML="z=x*y z="+z; //result with "Concatenate2" id

}

function myFunction() {
    var Time = new Date().getHours(); 
    var greeting;
    if (Time < 12 == Time>0) {
      greeting = "It is Morning Time!";
    }
    else if (Time > 12 == Time<18) {
      greeting = "It is the afternoon.";
    } else {
      greeting = "It is Evining Time!";
    }
    document.getElementById("greeting1").innerHTML = greeting; // display a time-based greeting
  }

  function myFunction4() {
    var a=5; 
    var b=10;
    if (a<b) {
      z=a*b;
    } else {
      z=a+b;
    }
    document.getElementById("Concatenate4").innerHTML = z; // display a time-based greeting
  }

  var Name = { firsname : "John", lastname : "Doe" };
  console.log(Name1);
  //Uncaught ReferenceError: Name1 is not defined    
