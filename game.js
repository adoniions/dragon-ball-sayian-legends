let power = 9000;
let form = "Base";

function update() {
  document.getElementById("power").innerText =
    "Power Level: " + power + " (" + form + ")";
}

function train() {
  power += 500;
  document.getElementById("log").innerText =
    "You trained and gained power!";
  update();
}

function fight() {
  let enemy = Math.floor(Math.random() * 3000);
  if (power > enemy) {
    power += 1000;
    document.getElementById("log").innerText =
      "You defeated the enemy!";
  } else {
    power -= 500;
    document.getElementById("log").innerText =
      "You lost the fight!";
  }
  update();
}

function transform() {
  if (power >= 15000 && form === "Base") {
    form = "Super Saiyan";
    power += 5000;
    document.getElementById("log").innerText =
      "You transformed into Super Saiyan!";
  } else {
    document.getElementById("log").innerText =
      "Not enough power!";
  }
  update();
}
