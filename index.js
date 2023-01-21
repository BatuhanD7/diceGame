
function dice(){

  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;

  if(player1 > player2){
    document.querySelector("h1").textContent = "Player1 Wins" ;
  }
  else if(player2 > player1){
    document.querySelector("h1").textContent = "Player2 Wins" ;
  }
  else {
    document.querySelector("h1").textContent = "DRAW!" ;
  }

  document.querySelector("h1").style.color = "#73777B";
  document.querySelectorAll("img")[0].classList.remove("visibility");
  document.querySelectorAll("img")[1].classList.remove("visibility");

switch (player1) {
  case 1:
    document.querySelector(".img1").setAttribute("src" , "dice1.png");
    break;
  case 2:
      document.querySelector(".img1").setAttribute("src" , "dice2.png");
    break;
  case 3:
      document.querySelector(".img1").setAttribute("src" , "dice3.png");
    break;
  case 4:
      document.querySelector(".img1").setAttribute("src" , "dice4.png");
    break;
  case 5:
      document.querySelector(".img1").setAttribute("src" , "dice5.png");
    break;
  case 6:
      document.querySelector(".img1").setAttribute("src" , "dice6.png");
    break;

  default:
}

switch (player2) {
  case 1:
    document.querySelector(".img2").setAttribute("src" , "dice1.png");
    break;
  case 2:
      document.querySelector(".img2").setAttribute("src" , "dice2.png");
    break;
  case 3:
      document.querySelector(".img2").setAttribute("src" , "dice3.png");
    break;
  case 4:
      document.querySelector(".img2").setAttribute("src" , "dice4.png");
    break;
  case 5:
      document.querySelector(".img2").setAttribute("src" , "dice5.png");
    break;
  case 6:
      document.querySelector(".img2").setAttribute("src" , "dice6.png");
    break;

  default:
}



}
