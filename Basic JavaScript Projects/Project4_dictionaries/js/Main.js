function Vehicle(Make, Model, Year, Color) { //defined function
  this.Vehicle_Make=Make; //defined Make
  this.Vehicle_Model=Model; //defined Model
  this.Vehicle_Year=Year; //defined year
  this.Vehicle_Color=Color; //defined color
}
var Jack=new Vehicle("Dodge","Viper", 2020, "Red"); 
var Erik=new Vehicle("Jeep","Car", 2021, "Black");
var Jan=new Vehicle("Dodge","Pinto", 2018, "White");
function My_Function() { //defining  a function name 

  document.getElementById("Concatenate").innerHTML="Erik Drive a "+ Erik.Vehicle_Color +" " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;//display the results of the  function 
  delete Erik.Vehicle_Color;
  document.getElementById("Concatenate1").innerHTML="After Delete: Erik Drive a "+ Erik.Vehicle_Color +" " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

}

  
