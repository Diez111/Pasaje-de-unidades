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
var errores = 0;
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
    //si hay algun espacio vacio
    if(ax == '' || bx == '' || cx == '' || tx == ''){
        errores++;
        alert("Complete todos los espacios");
    }
    else{
      errores = 0;
    }
    //Condicion especial: si (ht - hc) es menor a 4mca
    if(errores == 0 && (ht - hc) < 4){
      errores++;
      alert("El sistema no va a funcionar, va a necesitar una bomba");
    }
    else{
      errores = 0;
    }
    //errores de calculo
    if(errores == 0){
      apb(ha,hb,hc,ht);
    }
    /*APB*/

    if(errores == 0){
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
    errores = 0;
    }
}

function apb(ha,hb,hc,ht){
  //si ht es mayor a hc
  if(ht < hc){
    errores++;
    alert("hT es menor a hC, el sistema no va a funcionar");
  }
  //si ha...
  else if (ha > hc && ha > hb) {
    errores++;
    alert("Se debe seguir el esquema, hA no puede ser mayor a hC")
  }
  else if (ha > hc && ha < hb) {
    errores++;
    alert("Se debe seguir el esquema, hA no puede ser mayor a hC y menor a hB")
  }
  else if (ha < hc && ha > hb) {
    errores++;
    alert("Se debe seguir el esquema, hA no puede ser mayor a hB")
  }
  //si hb...
  else if (hb > ha && hb > hc) {
    errores++;
    alert("Se debe seguir el esquema, hB no puede ser mayor a hC")
  }
  else if (hb < ha && hb > hc) {
    errores++;
    alert("Se debe seguir el esquema, hB no puede ser mayor a hC y menor a hA")
  }
  else if (hb < ha && hb < hc) {
    errores++;
    alert("Se debe seguir el esquema, hB no puede ser menor a hA")
  }
  //si hc...
  else if (hc < hb && hc > ha) {
    errores++;
    alert("Se debe seguir el esquema, hC no puede ser menor a hB")
  }
  else if (hc < ha && hc < hb) {
    errores++;
    alert("Se debe seguir el esquema, hC no puede ser menor a hA")
  }
  else if (hc < ha && hc > hb) {
    errores++;
    alert("Se debe seguir el esquema, hC no puede ser mayor a hA y menor a hB")
  }
  //si no pasa nada
  else{
    errores = 0;
  }
}
