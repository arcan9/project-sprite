function changeDragon() {
  let sprite = document.querySelector("#sprite");
  // sprite.innerHTML = '<img src="src/dragon-solid.svg" alt="dragon"/>';
  sprite.src = "src/dragon-solid.svg";
}

let fruit = document.querySelector("#fruit");
fruit.addEventListener("click", changeDragon);
