function countdown() {// set your alarm for
  var seconds=document.getElementById("seconds").value;

  function tick(){
    seconds = seconds-1;
    timer.innerHTML = seconds;
    settimeout(tick,1000);
  if(seconds == -1){
    alert("Time's up!")
  }
  }
  tick();
}
