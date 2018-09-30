function main_while() {

  var bSeguir = true;
  var input = "";
  var bFirstLoop = true;
  var parcial = 0;
  var msje = "";
  var x = 0;

  input = prompt("Introduce un numero para sumar");
  bSeguir = (input !== "acabar");

  while(bSeguir) {

    if(isNaN(input)) {
      do {
        input = prompt(input + "\nEntrada erronea. Vuelva a intentarlo");
        bSeguir = (input !== "acabar");
      } while (isNaN(input) && (input !== "acabar"));
    } else parcial = sumar(parseInt(input), parcial);

    if(bSeguir) input = prompt("Otro numero");

    bSeguir = (input !== "acabar");

  }
  return parcial;
}

function main_for() {
 
  var input = "";
  var bFirstLoop = true;
  var parcial = 0;
  var msje = "";
  var x = 0;

  input = prompt("Introduce un numero para sumar");
  bSeguir = (input !== "acabar");

  for (var i = 1; bSeguir === true; i++) {
   if(isNaN(input)) {
      do {
        input = prompt(input + "\nEntrada erronea. Vuelva a intentarlo");
        bSeguir = (input !== "acabar");
      } while (isNaN(input) && (input !== "acabar"));
    } else parcial = sumar(parseInt(input), parcial);

    if(bSeguir) input = prompt("Otro numero");

    bSeguir = (input !== "acabar"); 
   }

  return parcial;  
  }
  
function printfor(){

var suma = main_for();
document.getElementById("result2").innerHTML = suma;

}

function printwhile (){
var suma = main_while();
document.getElementById("result").innerHTML = suma;
}

function createoptions(){
	
	var shtml = "<button onclick =printfor()>Test For</button>";
  var s2html = "<button onclick =printwhile()>Test while</button>";
	return shtml + s2html;

}

function sumar(a, b) {

  return a + b;

}