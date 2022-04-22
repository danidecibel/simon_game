var level = 0;
var keyPressed = false;
var jugando = false;
var secuencia = [0];
var secuenciaJugador = [0];
var turno = 1;

$(document).keypress(function() {
  if (keyPressed == false) {
    turnoMaquina();
    keyPressed = true;
  }
});

//JUEGA MAQUINA
function turnoMaquina() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  secuencia.push(randomNumber);
  level++;
  secuenciaJugador = [0];

  $("h1").text("Level " + level);

  setTimeout(function() {

    if (secuencia[level] == 1) {
      $("#green").addClass("choosen");
      var sonido = new Audio("sounds/green.mp3");
      sonido.play();
      setTimeout(function() {
        $("#green").removeClass("choosen")
      }, 250);
    }

    if (secuencia[level] == 2) {
      $("#red").addClass("choosen");
      var sonido = new Audio("sounds/red.mp3");
      sonido.play();
      setTimeout(function() {
        $("#red").removeClass("choosen")
      }, 250);
    }

    if (secuencia[level] == 3) {
      $("#yellow").addClass("choosen");
      var sonido = new Audio("sounds/yellow.mp3");
      sonido.play();
      setTimeout(function() {
        $("#yellow").removeClass("choosen")
      }, 250);
    }

    if (secuencia[level] == 4) {
      $("#blue").addClass("choosen");
      var sonido = new Audio("sounds/blue.mp3");
      sonido.play();
      setTimeout(function() {
        $("#blue").removeClass("choosen")
      }, 250);
    }
  }, 500);
  secuenciaJugador = [0];
  jugando = true;

}


//JUEGA JUGADOR
$("#green").click(function() {
  if (jugando) {
    secuenciaJugador.push(1);
    $("#green").addClass("pressed");
    var sonido = new Audio("sounds/green.mp3");
    sonido.play();
    setTimeout(function() {
      $("#green").removeClass("pressed")
    }, 250);

    comprobar();

  }
});

$("#red").click(function() {
  if (jugando) {
    secuenciaJugador.push(2);
    $("#red").addClass("pressed");
    var sonido = new Audio("sounds/red.mp3");
    sonido.play();
    setTimeout(function() {
      $("#red").removeClass("pressed")
    }, 250);

    comprobar();

  }
});

$("#yellow").click(function() {
  if (jugando) {
    secuenciaJugador.push(3);
    $("#yellow").addClass("pressed");
    var sonido = new Audio("sounds/yellow.mp3");
    sonido.play();
    setTimeout(function() {
      $("#yellow").removeClass("pressed")
    }, 250);

    comprobar();
  }
});

$("#blue").click(function() {
  if (jugando) {
    secuenciaJugador.push(4);
    $("#blue").addClass("pressed");
    var sonido = new Audio("sounds/blue.mp3");
    sonido.play();
    setTimeout(function() {
      $("#blue").removeClass("pressed")
    }, 250);

    comprobar();
  }
});

// COMPROBAR JUGADA
function comprobar() {
  jugando = false;

  if (secuenciaJugador[turno] == secuencia[turno]) {
    if (turno == secuencia.length - 1) {
      turno = 1;
      turnoMaquina();
    } else {
      turno++;
      jugando = true;
    }
  } else {
    gameOver();

  }
}

//GAME OVER
function gameOver() {
  $("body").addClass("game-over");
  var sonido = new Audio("sounds/wrong.mp3");
  sonido.play();
  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 250);
  level = 0;
  jugando = false;
  secuencia = [0];
  secuenciaJugador = [0];
  turno = 1;
  turnoMaquina();
}
