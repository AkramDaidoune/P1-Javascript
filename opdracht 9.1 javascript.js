var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const leeftijd = function() {
    if (document.getElementById("age").value < 18) {
        window.location.replace("./helaa je bent te jong.html")
       
    } else {
        window.location.replace("https://youtu.be/dQw4w9WgXcQ")
    }
}
