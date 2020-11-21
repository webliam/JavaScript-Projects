function my_dictionary() {
    var animal = {
      color:"black",
      age:"4",
      sound:"bark!",

    };
    document.getElementById("dictionary1").innerHTML="before delete sound ====> "+animal.sound;

    delete animal.sound;
    document.getElementById("dictionary").innerHTML="after delete sound ====> "animal.sound;

  }

  
