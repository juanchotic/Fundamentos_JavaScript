var combustible = "Diesel";



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
   case "Diesel":
      alert("1,02$");
      break;
   case "Super97":
      alert("1,45$");
      break;
   case "Super95":
      alert("1,56$");
      break;

   default:
      alert("Lo que haz escrito no esta en el combustible");
      break;
}

