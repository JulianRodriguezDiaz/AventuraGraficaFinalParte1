//maquina de estados
function maquinaEstados() {
  if (estadoPantalla == 0) {
    dibujarPantallaInicio();
  } else if (estadoPantalla == 1) {
    dibujarEscena1(); // Oficina
  } else if (estadoPantalla == 2) {
    dibujarTransicionSuspenso(); // Pantalla negra
  } else if (estadoPantalla == 3) {
    dibujarEscena2(); // Bodega
  } else if (estadoPantalla == 4) {
    dibujarPantallaDecision(); // Decision
  } else if (estadoPantalla == 5) {
    dibujarEscenaDepartamento(); // Departamento
  } else if (estadoPantalla == 6) {
    dibujarEscenaDiscoteca(); // Tropitango Bailable
  }
}
