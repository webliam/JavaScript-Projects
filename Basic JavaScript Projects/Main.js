
function My_Function() { //defining  a function name
    var x = 10; //assign the value 10 to x
    x += 5;//add 5 to x

    document.getElementById("Concatenate").innerHTML=x; //result with "Concatenate" id
}

function My_Function1() { //defining  a function name

var lastName = "Johnson";                      // String
document.getElementById("Concatenate1").innerHTML=lastName; //result with "Concatenate" id
}

function My_Function2() { //Comparison operators are used in logical statements to determine equality or difference between variables or values.
    
    var x = 5; //assign the value 5 to x
    var y = 5;//assign the value 5 to y
    var z = 6; //assign the value 6 to z
    document.getElementById("Concatenate2").innerHTML =
    "x=5 , y=5 (x == y)"+(x == y) + "<br>" + "z=6 , y=5 (z == y)"+(z == y)+"<br>"+"x=5 , y=5 (x === y)"+(x === y) + "<br>" + "z=6 , y=5 (z === y)"+(z === y)+"<br>"+"x=5 , y=5 (x > y)"+(x > y) + "<br>" + "z=6 , y=5 (z > y)"+(z > y)+"<br>"+"x=5 , y=5 (x < y)"+(x < y) + "<br>" + "z=6 , y=5 (z < y)"+(z < y);
}


function My_Function3() { //defining  a function name
    
    var B = 16 + "Volvo";
document.getElementById("Concatenate3").innerHTML = B; //return number +string
}

function My_Function4() { //defining  a function name
    
    var x = 6;
    var y = 3;
    document.getElementById("Concatenate4").innerHTML =
    "x=6 , y=3 (x < 10 && y > 1)"+(x < 10 && y > 1) + "<br>" + "x=6 , y=3 (x < 10 && y < 1)"+(x < 10 && y < 1);//The AND operator (&&) returns true if both expressions are true, otherwise it returns false.

    document.getElementById("Concatenate5").innerHTML = 
    "x=6 , y=3 (x == 5 || y == 5)"+(x == 5 || y == 5) + "<br>" + 
    "x=6 , y=3 (x == 6 || y == 0)"+(x == 6 || y == 0) + "<br>" + 
    "x=6 , y=3 (x == 0 || y == 3)"+(x == 0 || y == 3) + "<br>" + 
    "x=6 , y=3 (x == 6 || y == 3)"+(x == 6 || y == 3);//The OR operator (||) returns true if one or both expressions are true, otherwise it returns false.
    document.getElementById("Concatenate6").innerHTML = 
    "x=6 , y=3 !(x === y)"+!(x === y) + "<br>" + 
    "x=6 , y=3 !(x > y)"+!(x > y);//The NOT operator (!) returns true for false statements and false for true statements.
}

