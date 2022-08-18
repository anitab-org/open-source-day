function filterSelection(c) {
    var w = document.getElementById("workshops");
    var w_button = document.getElementById("button-workshops");
    var a = document.getElementById("all");
    var a_button = document.getElementById("button-all");

    if ("workshops" === c) {
      w.style.display = "block";
      a.style.display = "none";
      w_button.className += " active";
      a_button.className = "btn";
    } else {
      w.style.display = "none";
      a.style.display = "block";
      w_button.className = "btn";
      a_button.className += " active";
    }
}

filterSelection("all")