window.addEventListener('resize', resize);

window.onload = function() {
  filterSelection('all');
};

function filterSelection(c) {
    var w = document.getElementById("workshops");
    var w_button = document.getElementById("button-workshops");
    var a = document.getElementById("all");
    var a_button = document.getElementById("button-all");
    var all_mini = document.getElementById("all-mini");
    var workshop_mini = document.getElementById("workshops-mini");

    if ("workshops" === c) {
      w.style.display = "block";
      a.style.display = "none";
      all_mini.style.display = "none";
      w_button.className += " active";
      a_button.className = "btn";
    } else {
      w.style.display = "none";
      workshop_mini.style.display = "none";
      a.style.display = "block";
      w_button.className = "btn";
      a_button.className += " active";
    }
    resize()
}

function resize() {
    var a = document.getElementById("all");
    var w = document.getElementById("workshops");
    var all_mini = document.getElementById("all-mini");
    var workshop_mini = document.getElementById("workshops-mini");

    if (window.innerWidth <= 600) {
        if (a.style.display === "block") {
            w.style.display = "none";
            workshop_mini.style.display = "none";
            a.style.display = "none";
            all_mini.style.display = "block";
        }

        if (w.style.display === "block") {
            a.style.display = "none";
            all_mini.style.display = "none";
            w.style.display = "none";
            workshop_mini.style.display = "block";
        }
    } else {
        if (all_mini.style.display === "block") {
            w.style.display = "none";
            workshop_mini.style.display = "none";

            a.style.display = "block";
            all_mini.style.display = "none";
        }
        if (workshop_mini.style.display === "block") {
            a.style.display = "none";
            all_mini.style.display = "none";

            w.style.display = "block";
            workshop_mini.style.display = "none";
        }
    }
}