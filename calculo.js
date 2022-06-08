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
      var ht = document.getElementById('txtHC').value;
      var ht = document.getElementById('txtHB').value;
      var ht = document.getElementById('txtHA').value;

  }
