function COM() {
                var n1 = document.getElementById('txtN1').value;


                var s = document.getElementById('unidades');
            var valor1 = s.options[s.selectedIndex].value;

            var a = document.getElementById('unidades2');
        var valor2 = a.options[a.selectedIndex].value;


           /*PARTE KGF/CM2*/
          if (valor1 == '1' && valor2 == '4') {
            var multi = parseInt(n1) * 1
            alert("El pasaje es: "+multi)
          }

          else if (valor1 == '1' && valor2 == '5') {
            var multi = parseInt(n1) * 10.0003
            alert("El pasaje es: "+multi)
          }

          else if (valor1 == '1' && valor2 == '6') {
            var multi = parseInt(n1) * 0.980665
            alert("El pasaje es: "+multi)
          }

          /*PARTE mH2o*/

          else if (valor1 == '2' && valor2 == '4') {
            var multi = parseInt(n1) * 0.099997
            alert("El pasaje es: "+multi)
          }

          else if (valor1 == '2' && valor2 == '5') {
            var multi = parseInt(n1) * 1
            alert("El pasaje es: "+multi)
          }

          else if (valor1 == '2' && valor2 == '6') {
            var multi = parseInt(n1) * 0.098064
            alert("El pasaje es: "+multi)
          }

            /*PARTE Bar*/

            else if (valor1 == '3' && valor2 == '4') {
              var multi = parseInt(n1) * 1.0197
              alert("El pasaje es: "+multi)
            }

            else if (valor1 == '3' && valor2 == '5') {
              var multi = parseInt(n1) * 10.1974
              alert("El pasaje es: "+multi)
            }

            else if (valor1 == '3' && valor2 == '6') {
              var multi = parseInt(n1) * 1
              alert("El pasaje es: "+multi)
            }


    }





    function COM2() {

      var ht = document.getElementById('txtHT').value;
      var hc = document.getElementById('txtHC').value;
      var hb = document.getElementById('txtHB').value;
      var ha = document.getElementById('txtHA').value;


      var incendio = parseInt(ht) * 10

/*condiciones de presion*/

/*Reportar error*/

if (ha > hc && ha > hb) {
  alert("Se debe seguir el esquema Ha no puede ser mayor a Hc y Hb")
}
else if (ha > hc && ha < hb) {
  alert("Se debe seguir el esquema Ha no puede ser mayor a Hc")
}
else if (ha < hc && ha > hb) {
  alert("Se debe seguir el esquema Ha no puede ser mayor a Hb")
}


      else if (ht < hc && ht < hb && ht < ha) {
        alert("La presion del agua no es suficiente entre ningunos de los puntos")
      }
      else if (ht > hc && ht < hb && ht < ha) {
        alert("La presion del agua es suficiente entre los puntos Ht y Hc")
      }
      else if (ht < hc && ht > hb && ht < ha) {
        alert("La presion del agua no es suficiente entre los puntos Ht y Hb")
      }
      else if (ht < hc && ht < hb && ht > ha) {
        alert("La presion del agua es suficiente entre los puntos Ht y Ha")
      }



      else if (ht > hc && ht > hb && ht <   ha) {
        alert("La presion del agua es suficiente entre los puntos Ht, Hc y Hb " )
      }
      else if (ht > hc && ht > hb && ht > ha) {
        alert("La presion del agua es suficiente entre todos los puntos")
      }












  }
