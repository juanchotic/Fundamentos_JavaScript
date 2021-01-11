var nombreUsuario = prompt("Ingresa tu nombre: ");
var combustible = prompt("Ingresa el Combustible a usar: \nSelecciona Una de las opciones disponibles: \n1.Diesel \n2.Super97 \n3.Super95");



/* if (combustible == "Diesel") {
   alert("$1,09");
}
if (combustible == "Super97") {
   alert("$1,23");
}
if (combustible == "Super95") {
   alert("$1,14");
}
*/

switch (combustible) {
   case "1":
      document.write("Hola, "+nombreUsuario +" El Diesel te cuesta $8.000 Pesos Colombianos");
      break;
   case "2":
      document.write("Hola, "+nombreUsuario +" El Super97 te cuesta $11.000 Pesos Colombianos");
      break;
   case "3":
      document.write("Hola, "+nombreUsuario +" El Super95 te cuesta $13.000 Pesos Colombianos");
      break;

   default:
      alert("Lo que haz escrito no esta en el combustible");
      break;
}

