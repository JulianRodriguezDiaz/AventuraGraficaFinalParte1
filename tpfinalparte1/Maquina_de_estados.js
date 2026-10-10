//función sin parámetros.
  function maquinaEstados(){
    if (estadoPantalla == 0) {
        dibujarPantallaInicio(imgFondo, imgLogo, imgInicio);
      } else if (estadoPantalla == 1) {
        dibujarEscena(imgOficina);
      } else if (estadoPantalla == 2){
        dibujarEscena(imgDiscoteca);
      } else if (estadoPantalla == 3){
        dibujarEscena(imgBodega);
      } else if (estadoPantalla == 4){
        dibujarEscena(imgCallejon);
      } else if (estadoPantalla == 5){
        dibujarEscena5(255, CENTER, 50, 25);
      } else if (estadoPantalla == 0){ //para regresar al menú.
        dibujarPantallaInicio(imgFondo, imgLogo, imgInicio); 
      }
    } 
//Eventos: instante en el que pasa a otra pantalla.
  //Creditos -esta improvisado esto, dsp vemos si lo personalizamos god-.
    function dibujarEscena5(blanco, alineacion, tamTexto1, tamTexto2) {
      fill(blanco);
      textSize(tamTexto1);
      textAlign(alineacion);
      text("Creditos", 400, 225);
  
      fill(blanco);
      textSize(tamTexto2);
      textAlign(alineacion);
      text("Volver inicio", 400, 300);
      
      rect(width, height);
    }

//función con parámetros.
  function dibujarEscena(imagen){
   image(imagen, 0, 0, width, height); 
  }
