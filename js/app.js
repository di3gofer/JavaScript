var numero1 = 0
    numero2 = 0
    resultado = 0
    suma = document.getElementById('mas')
    resta = document.getElementById('menos')
    multiplicacion = document.getElementById('por')
    divicion = document.getElementById('dividido')
    igual = document.getElementById('igual')
    onOf = document.getElementById('on')
    signo = document.getElementById('sign')
    display = document.querySelector('#display')
    punto = document.getElementById('punto')
    teclas = document.getElementsByClassName('tecla')
    accion = ""
    negativo = 0
    Operaciones = {operacion: []}

var Calculadora = {
  init: function(){
    for(var i = 0; i < teclas.length; i++){
      teclas[i].setAttribute("onclick", "Calculadora.teclasNumericas({id: id})");
      teclas[i].setAttribute("onmousedown", "Calculadora.pulsarTecla({id: id})");
      teclas[i].setAttribute("onmouseup", "Calculadora.soltarTecla({id: id})");
    }
    suma.onclick = this.sumar
    resta.onclick = this.restar
    multiplicacion.onclick = this.multiplicar
    divicion.onclick = this.dividir
    igual.onclick = this.calcular
    onOf.onclick = this.borrar
    signo.onclick = this.positivoNegativo
    punto.onclick = this.agregarPunto
    document.onkeypress = this.capturarTecla
  },
  pulsarTecla: function(data){
    document.getElementById(data.id).style.padding = "3% 3% 2% 2%"
    document.getElementById(data.id).style.backgroundColor = "#999999"
  },
  soltarTecla: function(data){
    document.getElementById(data.id).style.padding = "0"
    document.getElementById(data.id).style.backgroundColor = "#999999"
  },
  teclasNumericas: function(data){
    var valor = display.innerHTML
    var cadena = display.innerHTML.toString()
    if(data.id < 10 && cadena.length < 8){
      if(display.innerHTML == "-0" || display.innerHTML == "0"){
        display.innerHTML = ""
      }
      display.innerHTML += data.id
    }
  },
  sumar: function(){
    if(numero1 == ''){
      accion = "sumar"
      numero1 = Number(display.innerHTML)
      display.innerHTML = ''
    }else{
      numero2 = Number(display.innerHTML)
      resultado = numero1 + numero2;
      display.innerHTML = resultado.toString().substring(0,8)
      this.agregarOperacion(resultado)
    }
  },
  restar: function(){
    if(numero1 == ''){
      accion = "restar"
      numero1 = Number(display.innerHTML)
      display.innerHTML = ''
    }else{
      numero2 = Number(display.innerHTML)
      resultado = numero1 - numero2;
      display.innerHTML = resultado.toString().substring(0,8)
      this.agregarOperacion(resultado)
    }
  },
  multiplicar: function(){
    if(numero1 == ''){
      accion = "multiplicar"
      numero1 = Number(display.innerHTML)
      display.innerHTML = ''
    }else{
      numero2 = Number(display.innerHTML)
      resultado = numero1 * numero2;
      display.innerHTML = resultado.toString().substring(0,8)
      this.agregarOperacion(resultado)
    }
  },
  dividir: function(){
    if(numero1 == ''){
      accion = "dividir"
      numero1 = Number(display.innerHTML)
      display.innerHTML = ''
    }else{
      numero2 = Number(display.innerHTML)
      resultado = numero1 / numero2;
      display.innerHTML = resultado.toString().substring(0,8)
      this.agregarOperacion(resultado)
    }
  },
  borrar: function(){
    numero1 = 0
    numero2 = 0
    accion = ''
    display.innerHTML = "0"
  },
  positivoNegativo: function(){
    var cadena = display.innerHTML.toString()
    if(cadena.indexOf('-') == -1){
      if(display.innerHTML == "-0" || display.innerHTML == "0"){
        console.log('El unico numero es 0, no se agrega el -');
      }else{
        if(cadena.length < 8){
          display.innerHTML = "-" + display.innerHTML
        }
      }
    }else{
      display.innerHTML = display.innerHTML.slice(1)
    }
  },
  agregarPunto: function(){
    var cadena = display.innerHTML.toString()
    if(cadena.indexOf('.') == -1){
      if(cadena.length < 8){
        display.innerHTML = display.innerHTML + "."
      }
    }
  },
  agregarOperacion: function(resultado){
    Operaciones.operacion.push({numero1: numero1, accion: accion, numero2:numero2, resultado: resultado})
    numero1 = 0
  },
  capturarTecla: function(event){
    var tecla = event.which || event.keyCode
    var valorTecla = String.fromCharCode(tecla)
    var cadena = display.innerHTML.toString()
    if(valorTecla < 10 && cadena.length < 8){
      if(display.innerHTML == "-0" || display.innerHTML == "0"){
        display.innerHTML = ""
      }
      display.innerHTML += valorTecla
    }
  },
  calcular: function(){
    switch(accion){
      case "sumar":
        Calculadora.sumar()
        break;
      case "restar":
        Calculadora.restar()
        break;
      case "multiplicar":
        Calculadora.multiplicar()
        break;
      case "dividir":
        Calculadora.dividir()
        break;
      default:
        alert('No hay na accion para calcular')
    }
  }
}

Calculadora.init()
