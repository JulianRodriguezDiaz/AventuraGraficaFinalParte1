//Para que la lluvia se escuche en todos los escenarios menos en la discoteca
function controlarLluvia() {
  if (estadoPantalla == 6) {
    // Discoteca: se corta la lluvia
    if (lluvia.isPlaying()) {
      lluvia.stop();
    }
  } else if (estadoPantalla > 0) {
    if (!lluvia.isPlaying()) {
      lluvia.loop();
    }
  }
}

//Para que solo se escuche el ambiente de la discoteca
function AmbienteDiscotecaSonido() {
  if (estadoPantalla == 6) {
    // Discoteca: suena en loop
    if (!ambienteDiscoteca.isPlaying()) {
      ambienteDiscoteca.loop();
    }
  } else {
    if (ambienteDiscoteca.isPlaying()) {
      ambienteDiscoteca.stop();
    }
  }
}
