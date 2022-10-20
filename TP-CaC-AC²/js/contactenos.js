function validar(){
                
  /*creo una variable de tipo booleano que en principio tendrá un valor true(verdadero),
  y que se convertirá en false(falso) cuando la condición no se cumpla*/
  var todo_correcto = true;
  var msg = "Debes revisar el contenido de los siguientes campos:\n";
  
  /*El primer campo a comprobar es el del nombre. Lo traemos por id y verificamos
  la condición, en este caso, por ejemplo, le decimos que tiene que tener más de dos caracteres
  para que sea un nombre válido. Si no tiene más de dos caracteres, la variable todo_correcto
  devolverá false.*/
  
  if(document.getElementById('nombre').value.length < 2 ){
      todo_correcto = false;
      msg += "- Nombre: debe ingresar su nombre\n";
  }
  /*Para comprobar el email usamos una expresión regular para controlar que el texto ingresado tengo formato de email. 
  Lo que hacemos es obtener el value del campo de texto destinado
al email, y le aplicamos el método test() del objeto global RegExp(que nos permite
trabajar con expresiones regulares).*/
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  var email = document.formulario.email.value;
  if (!expresion.test(email)){
      todo_correcto = false;
      msg += "- E-mail: Por favor ingrese un email válido\n";
  }
  /*Para comprobar el teléfono usamos una expresión regular para controlar que el se ingresen entre 8 y 15 dígitos. 
  Lo que hacemos es obtener el value del campo de texto destinado
al teléfono, y le aplicamos el método test() del objeto global RegExp(que nos permite
trabajar con expresiones regulares).*/
  var expresion2 = /^[0-9]{8,15}$/;
  var telefono = document.formulario.telefono.value;
  if (!expresion2.test(telefono)){
      todo_correcto = false;
      msg += "- Teléfono: Ingrese su tel, sin espacios ni guiones\n";
  }
    
  /*Si hay algún error, osea, si la variable
  todo_correcto ha devuelto false al menos una vez, generamos una alerta advirtiendo
  al usuario cuales de los datos ingresados no son los que esperamos y como corregirlos. */
  if(!todo_correcto){
  alert('Algunos datos no están correctos.\n ' + msg);
  }
  
  return todo_correcto;
  }

/*Validacion email

  const email = document.getElementById("mail");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
  }); */
  