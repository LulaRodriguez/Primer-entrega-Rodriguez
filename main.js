
var CuentaRegresiva = new Date("Dic 31, 2023 23:59:59").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();

  var distancia = CuentaRegresiva - now;

  var días = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);


  document.getElementById("CuentaRegresiva").innerHTML = días + "d " + horas + "h "
  + minutos + "m " + segundos + "s ";


  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("CuentaRegresiva").innerHTML = "¡Llegó el día!";
  }
}, 1000);