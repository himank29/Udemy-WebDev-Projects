var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;
var img_src1, img_src2;
switch(randomNumber1){
    case 1:
        img_src1='./dice1.png';
        break;

    case 2:
        img_src1='./dice2.png';
        break;

    case 3:
        img_src1='./dice3.png';
        break;

    case 4:
        img_src1='./dice4.png';
        break;

    case 5:
        img_src1='./dice5.png';
        break;

    case 6:
        img_src1='./dice6.png';
        break;
}
switch(randomNumber2){
    case 1:
        img_src2='./dice1.png';
        break;

    case 2:
        img_src2='./dice2.png';
        break;

    case 3:
        img_src2='./dice3.png';
        break;

    case 4:
        img_src2='./dice4.png';
        break;

    case 5:
        img_src2='./dice5.png';
        break;

    case 6:
        img_src2='./dice6.png';
        break;
}

document.querySelector("#dice1").src= img_src1;
document.querySelector("#dice2").src= img_src2;

if(randomNumber1>randomNumber2) document.querySelector(".heading").textContent = "Player 1 wins";
else if(randomNumber1<randomNumber2) document.querySelector(".heading").textContent = "Player 2 wins";
else document.querySelector(".heading").textContent = "Draw";

