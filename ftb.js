var grass = 100;
var colors = ["green", "darkgreen", "olive"];
var birds = ["🦉", "🦚", "🦜", "🦢", "🦩", "🐦", "🐧", "🦅", "🦆","🐤","🦃","🕊️"];
var win = [
  "What a keen eye you have!",
  "Maybe you should go birding?",
  "Clapping. Lots of clapping!",
  "You have won the great prize of our kudos!"
];
function addGrass() {
  for (var i = 0; i < grass; i++) {
    var t = document.createElement("div");
    t.className = "grass";
    t.style.height = Math.random() * 25 + 65 + "%";
    t.style.left = i + "%";
    t.style.width = Math.random() * 1.5 + 0.5 + "vw";
    t.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    t.style.animationDelay = Math.random() * 3 + "s";
    t.style.zIndex = i % 2 === 0 ? -1 : 1;
    document.body.appendChild(t);
  }
}

function addBirds() {
  birds.forEach(function (elm) {
    var b = document.createElement("div");
    b.className = "bird";
    b.style.left = Math.random() * 80 + 10 + "%";
    b.style.bottom = Math.random() * 75 + "%";
    b.innerHTML = elm;
    b.onclick = function () {
      var cln = this.cloneNode(true);
      cln.style.position = "relative";
      cln.style.left = "";
      cln.style.bottom = "";
      cln.style.display = "inline-block";
      this.remove();
      document.querySelector("p").appendChild(cln);

      var num = document.querySelector("span").innerText;
      num--;
      document.querySelector("span").innerText = num;

      setTimeout(function () {
        if (document.querySelector("p").children.length == birds.length + 2) {
          alert(win[Math.floor(Math.random() * win.length)]);
          document.querySelector("p").innerHTML =
            "Can you find <span>9</span> birds?<br>";
          addBirds();
        }
      }, 100);
    };
    document.body.appendChild(b);
  });
}
addGrass();
addBirds();