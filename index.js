var n=Math.floor(Math.random()*6)+1;

if(n==1){
document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(n==2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(n==3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(n==4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(n==5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

var d=Math.floor(Math.random()*6)+1;

if(d==1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(d==2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(d==3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(d==4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(d==5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(n>d)
{
  document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
}
else if(n==d)
{
  document.querySelector("h1").innerHTML="🚩 Its a Draw  🚩";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
