let activeplayer='x';
let selectedSquares=[];
function placexoro(squarNumber) {
  if (!selectedSquares.some(element=>element.includes(squarNumber))){
    let select=document.getElementById(squarNumber);
    if (activeplayer==='x'){
      select.style.backgroundImage ='url("images/X.png")';
    } else {
      select.style.backgroundImage ='url("images/O.png")';

    }
    selectedSquares.push(squarNumber + activeplayer);
    checkWincondition();
    if(activeplayer==='x'){
      activeplayer='o';
    } else {
      activeplayer ='x';
    }
    audio('./media/place.mp3');
    if (activeplayer==='o'){
      disableclick();
      setTimeout(function (){ computersTurn();} ,1000);
    }
    return true;
  }
  function computersTurn(){
    let success=false;
    let pickASquare=String(Math.floor(Math.random()*9));
    while(!success){
      if (placexoro(pickASquare)){
        placexoro(pickASquare);
        success=true;
      };
    }

  }
}
function checkWincondition(){
  if        (arrayIncludes('0x', '1x', '2x')){ drawWiLine(50, 100, 558,100);}
  else if   (arrayIncludes('3x', '4x', '5x')){ drawWiLine(50, 304, 558,304);}
  else if   (arrayIncludes('6x', '7x', '8x')){ drawWiLine(50, 508, 558,508);}
  else if   (arrayIncludes('0x', '3x', '6x')){ drawWiLine(100, 50, 100,558);}
  else if   (arrayIncludes('1x', '4x', '5x')){ drawWiLine(304, 50, 304,558);}
  else if   (arrayIncludes('2x', '5x', '8x')){ drawWiLine(508, 50, 508,558);}  
  else if   (arrayIncludes('6x', '4x', '2x')){ drawWiLine(100, 508, 510,90);}  
  else if   (arrayIncludes('0x', '4x', '8x')){ drawWiLine(100, 100, 520,520);}  
  else if   (arrayIncludes('0o', '1o', '2o')){ drawWiLine(50, 100, 558,100);}  
  else if   (arrayIncludes('3o', '4o', '5o')){ drawWiLine(50, 304, 558,304);}  
  else if   (arrayIncludes('6o', '7o', '8o')){ drawWiLine(50, 500, 558,508);}  
  else if   (arrayIncludes('0o', '3o', '6o')){ drawWiLine(100, 50, 100,558);} 
  else if   (arrayIncludes('1o', '4o', '7o')){ drawWiLine(304, 50, 304,558);}
  else if (selectedSquares.length>=9){
    audio('./media/tie.mp3');
    setTimeout(function() {resetGame();},1000);
  }
  function arrayIncludes(squareA, squareB, squareC){
    const a=selectedSquares.includes(squareA);
    const b=selectedSquares.includes(squareB);
    const c=selectedSquares.includes(squareC);
    if(a===true && b === true && c===true) {return true;}


  }

}
function disableclick(){
  body.style.pointerEvents='none';
  setTimeout(function(){ body.style.pointerEvents='auto';}, 1000);
}
function audio(audioURL){
  let audio= new Audio(audioURL);
  audio.play();
}
function drawWiLine(coordX1 ,coordy1 , coordX2,coordy2){
  const canvas=document.getElementById('win-lines');
  const c=canvas.getContext('2d');

  let x1 = coordX1,
      y1 = coordy1,
      x2 = coordX2,
      y2 = coordy2,
      x = x1,
      y = y1;
      function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth=10;
        c.strokestyle='rgba(70,255,33,0.8)';
        c.stroke();
        if (x1<=x2 && y1<=y2){
          if(x<x2){x+=10;}
          if(y<y2){y+=10;}
          if(x>=x2 && y>=y2){cancelAnimationFrame(animationLoop);}
        }
        if (x1<=x2 && y1>=y2){
          if(x<x2){x+=10;}
          if(y>y2){y-=10;}
          if(x>=x2 && y<=y2){cancelAnimationFrame(animationLoop);}
        }

      }
      function clear(){
        const animationLoop= requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
      }
      disableclick();
      audio('./media/winGame.mp3');
      animateLineDrawing();
      setTimeout(function(){clear(); resetGame();},1000);
      
}
function resetGame() {
  for (let i=0 ; i<9; i++){
    let square=document.getElementById(String(i));
    square.style.backgroundImage='';
  }
  selectedSquares=[];
}

