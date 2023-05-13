var randomn1 = Math.floor(Math.random() * 6) + 1;

var imagesource = "images/dice" + randomn1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imagesource);

var randomn2 = Math.floor(Math.random() * 6) + 1;

var imagesource2 = "images/dice" + randomn2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imagesource2);

if(randomn1 > randomn2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if (randomn2 > randomn1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}