console.log('Dejamenpaz iniciado');
// el de Itau
var x = document.getElementById('InputValuePIN');
if (x) {
  x.removeAttribute('readonly');
  x.classList.add("conClase");
  console.log('Liberado de Itau');
}

//Todo el resto(Vision, Familiar)
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
  x = inputs[i];
  if (x.type.toLowerCase() == 'password') {
    x.removeAttribute('readonly');
    x.classList.add("conClase");
    console.log('Password habilitado');
  }
}