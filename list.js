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

  var close = document.getElementsByClassName("close_bar");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
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

function timer() {
  var want_timer = prompt(
    "Do you want to set a timer for this task: type yes, or no"
  );
  if (want_timer !== "yes" || want_timer === null) {
    return;
  } else {
    var hour = prompt("Enter Hours:(min: 0, max: 99)");
    var min = prompt("Enter Minutes:(min: 0, max: 60)");
    var sec = prompt("Enter seconds:(min: 0, max: 60)");
    alert("click Start to begin the timer");
  }

  var h = document.getElementById("hour");
  var m = document.getElementById("minute");
  var s = document.getElementById("sec");

  h.value = hour;
  m.value = min;
  s.value = sec;
}

var start = document.getElementById("start");
var reset = document.getElementById("reset");
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;
reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopInterval();
});
start.addEventListener("click", function () {
  //initialize the variable
  function startInterval() {
    startTimer = setInterval(function () {
      set_timer();
    }, 1000);
  }
  startInterval();
});

function set_timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}
function stopInterval() {
  clearInterval(startTimer);
}
