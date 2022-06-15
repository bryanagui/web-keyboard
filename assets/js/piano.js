$(document).ready(function () {
  $("#keyboard-note-1").on("click", function () {
    const note_do = new Audio("assets/sfx/do.wav");
    note_do.play();
  });

  $("#keyboard-note-2").on("click", function () {
    const note_re = new Audio("assets/sfx/re.wav");
    note_re.play();
  });

  $("#keyboard-note-3").on("click", function () {
    const note_mi = new Audio("assets/sfx/mi.wav");
    note_mi.play();
  });

  $("#keyboard-note-4").on("click", function () {
    const note_fa = new Audio("assets/sfx/fa.wav");
    note_fa.play();
  });

  $("#keyboard-note-5").on("click", function () {
    const note_sol = new Audio("assets/sfx/sol.wav");
    note_sol.play();
  });

  $("#keyboard-note-6").on("click", function () {
    const note_la = new Audio("assets/sfx/la.wav");
    note_la.play();
  });

  $("#keyboard-note-7").on("click", function () {
    const note_ti = new Audio("assets/sfx/ti.wav");
    note_ti.play();
  });

  $("#keyboard-note-8").on("click", function () {
    const note_do2 = new Audio("assets/sfx/do2.wav");
    note_do2.play();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 49 || e.keyCode == 97) {
      $("#keyboard-note-1").trigger("click");
    }
    if (e.keyCode == 50 || e.keyCode == 98) {
      $("#keyboard-note-2").trigger("click");
    }
    if (e.keyCode == 51 || e.keyCode == 99) {
      $("#keyboard-note-3").trigger("click");
    }
    if (e.keyCode == 52 || e.keyCode == 100) {
      $("#keyboard-note-4").trigger("click");
    }
    if (e.keyCode == 53 || e.keyCode == 101) {
      $("#keyboard-note-5").trigger("click");
    }
    if (e.keyCode == 54 || e.keyCode == 102) {
      $("#keyboard-note-6").trigger("click");
    }
    if (e.keyCode == 55 || e.keyCode == 103) {
      $("#keyboard-note-7").trigger("click");
    }
    if (e.keyCode == 56 || e.keyCode == 104) {
      $("#keyboard-note-8").trigger("click");
    }
  });
});
