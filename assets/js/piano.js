$(document).ready(function () {
  $("#keyboard-note-a").on("click", function () {
    const note_do = new Audio("assets/sfx/do.wav");
    note_do.play();
  });

  $("#keyboard-note-s").on("click", function () {
    const note_re = new Audio("assets/sfx/re.wav");
    note_re.play();
  });

  $("#keyboard-note-d").on("click", function () {
    const note_mi = new Audio("assets/sfx/mi.wav");
    note_mi.play();
  });

  $("#keyboard-note-f").on("click", function () {
    const note_fa = new Audio("assets/sfx/fa.wav");
    note_fa.play();
  });

  $("#keyboard-note-g").on("click", function () {
    const note_sol = new Audio("assets/sfx/sol.wav");
    note_sol.play();
  });

  $("#keyboard-note-h").on("click", function () {
    const note_la = new Audio("assets/sfx/la.wav");
    note_la.play();
  });

  $("#keyboard-note-j").on("click", function () {
    const note_ti = new Audio("assets/sfx/ti.wav");
    note_ti.play();
  });

  $("#keyboard-note-k").on("click", function () {
    const note_do2 = new Audio("assets/sfx/do2.wav");
    note_do2.play();
  });

  $("#keyboard-note-q").on("click", function () {
    const note_do3 = new Audio("assets/sfx/do3.wav");
    note_do3.play();
  });

  $("#keyboard-note-w").on("click", function () {
    const note_re2 = new Audio("assets/sfx/re2.wav");
    note_re2.play();
  });

  $("#keyboard-note-e").on("click", function () {
    const note_mi2 = new Audio("assets/sfx/mi2.wav");
    note_mi2.play();
  });

  $("#keyboard-note-r").on("click", function () {
    const note_fa2 = new Audio("assets/sfx/fa2.wav");
    note_fa2.play();
  });

  $("#keyboard-note-t").on("click", function () {
    const note_sol2 = new Audio("assets/sfx/sol2.wav");
    note_sol2.play();
  });

  $("#keyboard-note-y").on("click", function () {
    const note_la2 = new Audio("assets/sfx/la2.wav");
    note_la2.play();
  });

  $("#keyboard-note-u").on("click", function () {
    const note_ti2 = new Audio("assets/sfx/ti2.wav");
    note_ti2.play();
  });

  $("#keyboard-note-i").on("click", function () {
    const note_do4 = new Audio("assets/sfx/do4.wav");
    note_do4.play();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 49 || e.keyCode == 81) {
      $("#keyboard-note-q").trigger("click");
    }
    if (e.keyCode == 50 || e.keyCode == 87) {
      $("#keyboard-note-w").trigger("click");
    }
    if (e.keyCode == 51 || e.keyCode == 69) {
      $("#keyboard-note-e").trigger("click");
    }
    if (e.keyCode == 52 || e.keyCode == 82) {
      $("#keyboard-note-r").trigger("click");
    }
    if (e.keyCode == 53 || e.keyCode == 84) {
      $("#keyboard-note-t").trigger("click");
    }
    if (e.keyCode == 54 || e.keyCode == 89) {
      $("#keyboard-note-y").trigger("click");
    }
    if (e.keyCode == 55 || e.keyCode == 85) {
      $("#keyboard-note-u").trigger("click");
    }
    if (e.keyCode == 56 || e.keyCode == 73) {
      $("#keyboard-note-i").trigger("click");
    }
    if (e.keyCode == 65 || e.keyCode == 97) {
      $("#keyboard-note-a").trigger("click");
    }
    if (e.keyCode == 83 || e.keyCode == 98) {
      $("#keyboard-note-s").trigger("click");
    }
    if (e.keyCode == 68 || e.keyCode == 99) {
      $("#keyboard-note-d").trigger("click");
    }
    if (e.keyCode == 70 || e.keyCode == 100) {
      $("#keyboard-note-f").trigger("click");
    }
    if (e.keyCode == 71 || e.keyCode == 101) {
      $("#keyboard-note-g").trigger("click");
    }
    if (e.keyCode == 72 || e.keyCode == 102) {
      $("#keyboard-note-h").trigger("click");
    }
    if (e.keyCode == 74 || e.keyCode == 103) {
      $("#keyboard-note-j").trigger("click");
    }
    if (e.keyCode == 75 || e.keyCode == 104) {
      $("#keyboard-note-k").trigger("click");
    }
  });
});
