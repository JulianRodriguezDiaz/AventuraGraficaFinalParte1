//Botones interactivos.
function mousePressed() {
  if (estadoPantalla == 0) {
    if (mouseX > 300 && mouseX < 500 && mouseY > 280 && mouseY < 380) {
      estadoPantalla = 1;
    }
  } else if (estadoPantalla == 1){ //esto era para ir comprobando que la maquina de estados y los eventos de las pantallas funcione bien. Dsp cuando hagamos las distintas posibilidades se cambia.
    estadoPantalla = 2;
  } else if (estadoPantalla == 2){
    estadoPantalla = 3;
  } else if (estadoPantalla == 3){
    estadoPantalla = 4;
  } else if (estadoPantalla == 4){
    estadoPantalla = 5;
  } else if (estadoPantalla == 5){
    if (mouseX > 320 && mouseX < 480 && mouseY > 270 && mouseY < 310){
      estadoPantalla = 0;
    }
  }
}
