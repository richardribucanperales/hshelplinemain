console.log("loaded heroimage change")
var back = ["./img/hero1.jpg", "./img/hero2.jpg", "./img/hero3.jpg"];

var a = document.getElementById("hero");


var y = Math.floor(Math.random()*3)
console.log(y)

var z = back[y]

console.log(z)

var x = a.style.backgroundImage = "url" + "(" + z + ")"