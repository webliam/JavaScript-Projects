function my_dictionary() {
    var animal = {
      color="black",
      age="4",
      sound="bark!",

    };
    delete animal.sound;
    document.getElementById("dictionary").innerHTML=animal.sound;
    document.getElementById("dictionary").innerHTML =
"color " + color + ". age " + age;
  }

  
