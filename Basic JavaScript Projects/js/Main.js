
function Vehicle(Make, Model, Year, Color) { //defining  a function dictionary 
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper", 2020, "Red");
var Erik=new Vehicle("Jeep","Car", 2021, "Black");
var Jan=new Vehicle("Dodge","Pinto", 2018, "White");
function My_Function() { 
    document.getElementById("Concatenate").innerHTML="Erik Drive a "+ Erik.Vehicle_Color +" " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;//display the results of the constructor function within an HTML element
}

  function myFunction5() { //Click "Try it" to display the value of each element in the form
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("Concatenate5").innerHTML = voteable + " to vote.";
  }


  
  function hypotenuse(a, b) { // defined Nested Function
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
 }
 function secondFunction() {
    var result;
    result = hypotenuse(1,2);
    document.getElementById("Concatenate7").innerHTML = "Result="+result;


 }
