function newelement() {
  var li = document.createElement("li");

  var list_input = document.getElementById("myInput").value;

  var text = document.createTextNode(list_input);

  li.appendChild(text);

  if (list_input === "") {
    alert("Can't add anyting. Enter a task!");
  } else {
    document.getElementById("user-list").appendChild(li);
    timer();
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");

  var x_bar = document.createTextNode("\u00D7");

  span.className = "close_bar";

  span.appendChild(x_bar);
  li.appendChild(span);

  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );

  var close = document.getElementsByClassName("close_bar");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function timer() {
  var want_timer = prompt(
    "Do you want to set a timer for this task: type yes, or no"
  );
  if (want_timer !== "yes" || want_timer === null) {
    return;
  } else {
    var hour = prompt("Enter Hours:");
    var min = prompt("Enter Minutes");
    var sec = prompt("Enter seconds");
  }
}
