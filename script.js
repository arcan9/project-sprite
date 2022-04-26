function changeDragon() {
  document.querySelector("#sprite").src = "src/dragon-solid.svg";
  document.querySelector("#lorem").innerHTML =
    "The fruit turned the sprite into a dragon!";
}

let fruit = document.querySelector("#fruit");
fruit.addEventListener("click", changeDragon);

function changeCrow() {
  document.querySelector("#sprite").src = "src/crow-solid.svg";
  document.querySelector("#lorem").innerHTML =
    "The mushroom turned the sprite into a crow!";
}

let mushroom = document.querySelector("#mushroom");
mushroom.addEventListener("click", changeCrow);

function changeFrog() {
  document.querySelector("#sprite").src = "src/frog-solid.svg";
  document.querySelector("#lorem").innerHTML =
    "The leaf turned the sprite into a frog!";
}

let leaf = document.querySelector("#leaf");
leaf.addEventListener("click", changeFrog);

function changeHuman() {
  document.querySelector("#sprite").src = "src/man-people-svgrepo-com.svg";
  document.querySelector("#lorem").innerHTML =
    "The alcohol turned the sprite into a human! You turned him back into his true form. Congrats! He is incredibly grateful!";
}

let alcohol = document.querySelector("#alcohol");
alcohol.addEventListener("click", changeHuman);
