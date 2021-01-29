/* eslint-disable */
import "bootstrap";
import "./style.css";
//
var numCentro = document.getElementsByClassName("number");
var icono = document.getElementsByClassName("icon");
// La funcion se ejecuta cada vez que se "refresca" la página web.
window.onload = function() {
  // Numeros
  //Se crean arrays con valores strings para seleccionarlos previamente.
  var cardNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K",
    "A"
  ];
  var rdm1 = Math.floor(Math.random() * cardNumber.length);

  numCentro[0].innerHTML = cardNumber[rdm1];

  // Iconos
  let iconRandom = ["\u2666", "\u2665", "\u2663", "\u2660", "\u25ca"];

  var rdm2 = Math.floor(Math.random() * iconRandom.length);

  //   icono[0].innerHTML = iconRandom[rdm2];
  //   icono[1].innerHTML = iconRandom[rdm2];
  for (let i = 0; i < icono.length; i++) {
    icono[i].innerHTML = iconRandom[rdm2];
  }
};
