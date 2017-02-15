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
    accion = "inicio"
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
  sumar: function(){
    if(accion == "inicio"){accion = "sumar"}
    if(accion != "sumar"){
      numero1 = resultado
      display.innerHTML = ''
      accion = "sumar"
    }else{
      if(numero1 == ''){
        numero1 = Number(display.innerHTML)
        display.innerHTML = ''
      }else{
        if(display.innerHTML == resultado){
          numero1 = Number(display.innerHTML)
          numero2 = numero2
        }else{
          numero2 = Number(display.innerHTML)
        }
        resultado = numero1 + numero2;
        display.innerHTML = this.validarDisplay(resultado)
        this.agregarOperacion(resultado)
      }
    }
  },
  restar: function(){
    if(accion == "inicio"){accion = "restar"}
    if(accion != "restar"){
      numero1 = resultado
      display.innerHTML = ''
      accion = "restar"
    }else{
      if(numero1 == ''){
        numero1 = Number(display.innerHTML)
        display.innerHTML = ''
      }else{
        if(display.innerHTML == resultado){
          numero1 = Number(display.innerHTML)
          numero2 = numero2
        }else{
          numero2 = Number(display.innerHTML)
        }
        resultado = numero1 - numero2;
        display.innerHTML = this.validarDisplay(resultado)
        this.agregarOperacion(resultado)
      }
    }
  },
  multiplicar: function(){
    if(accion == "inicio"){accion = "multiplicar"}
    if(accion != "multiplicar"){
      numero1 = resultado
      display.innerHTML = ''
      accion = "multiplicar"
    }else{
      if(numero1 == ''){
        numero1 = Number(display.innerHTML)
        display.innerHTML = ''
      }else{
        if(display.innerHTML == resultado){
          numero1 = Number(display.innerHTML)
          numero2 = numero2
        }else{
          numero2 = Number(display.innerHTML)
        }
        resultado = numero1 * numero2;
        display.innerHTML = this.validarDisplay(resultado)
        this.agregarOperacion(resultado)
      }
    }
  },
  dividir: function(){
    if(accion == "inicio"){accion = "dividir"}
    if(accion != "dividir"){
      numero1 = resultado
      display.innerHTML = ''
      accion = "dividir"
    }else{
      if(numero1 == ''){
        numero1 = Number(display.innerHTML)
        display.innerHTML = ''
      }else{
        if(display.innerHTML == resultado){
          numero1 = Number(display.innerHTML)
          numero2 = numero2
        }else{
          numero2 = Number(display.innerHTML)
        }
        resultado = numero1 / numero2;
        display.innerHTML = this.validarDisplay(resultado)
        this.agregarOperacion(resultado)
      }
    }
  },
  borrar: function(){
    numero1 = 0
    numero2 = 0
    resultado = 0
    accion = "inicio"
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
  },
  validarDisplay: function(cadena){
    var valor = cadena.toString()
    if(valor.length > 8){
      return valor.substring(0,8)
    }else{
      return valor
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
        alert('Seleccione la Operacion a Realizar. Gracias !!')
    }
  }
}

Calculadora.init()
