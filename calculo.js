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

/*CALCULOS*/
function calculo(){

    var ax = document.getElementById('txtHA').value;
    var bx = document.getElementById('txtHB').value;
    var cx = document.getElementById('txtHC').value;
    var tx = document.getElementById('txtHT').value;

    var ha = parseFloat(ax);
    var hb = parseFloat(bx);
    var hc = parseFloat(cx);
    var ht = parseFloat(tx);

    /*APB*/
    if(ax == '' || bx == '' || cx == '' || tx == ''){
        alert("Complete todos los espacios");
    }
    if(ht < hc){
      alert("hT es menor a HC el sistema de incendio no funciona");
    }

    apb1(ha,hb,hc,ht); //COMPLETAR
    /*APB*/


    //MCA
    var a = ht - ha;
    var b = ht - hb;
    var c = ht - hc;

    //kg/cm2
    var a2 = a /10
    var b2 = b / 10
    var c2 = c / 10

    //OUTPUT
    var linea = "\r\n"
    var men = "";
    men = "A = "; men += a; men += "mca  B = "; men += b; men += "mca  C = "; men += c; men += "mca";
    men += linea;
    men += "A = "; men += a2; men += "kg/cm2  B = "; men += b2; men += "kg/cm2  C = "; men += c2; men += "kg/cm2";
    alert(men);

}

function apb1(ha,hb,hc,ht){
  if (ha > hc && ha > hb) {
    alert("Se debe seguir el esquema, Ha no puede ser mayor a Hc y Hb")
  }
  else if (ha > hc && ha < hb) {
    alert("Se debe seguir el esquema, Ha no puede ser mayor a Hc")
  }
  else if (ha < hc && ha > hb) {
    alert("Se debe seguir el esquema, Ha no puede ser mayor a Hb")
  }
  else if (hb > ha && hb > hc) {
    alert("Se debe seguir el esquema, Hb no puede ser mayor a Hc")
  }

}
