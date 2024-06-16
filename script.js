let click = false;

document.getElementById("red-circle").addEventListener("click", function() {
  click =!click; // toggle click state

  if (click) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("icon").style.color = "black";
    document.getElementById("demo").innerHTML = "DARK MODE";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("icon").style.color = "white";
    document.getElementById("demo").innerHTML = "LIGHT MODE";
  }

  document.body.style.transition = "all 3s";
  document.getElementById("red-circle").style.transition = "all 3s";
  document.getElementById("red-circle").style.backgroundColor = click? "white" : "black";
});
