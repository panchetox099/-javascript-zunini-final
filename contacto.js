const inputFecha = document.getElementById("fecha");
inputFecha.min = new Date().toISOString().split("T")[0];




const motivosSelect = document.getElementById('motivos');
const motivosParrafo = document.getElementById('motivos-seleccionados');

motivosSelect.addEventListener('change', () => {
  const opcionesSeleccionadas = Array.from(motivosSelect.selectedOptions).map(option => option.text);
  const motivos = opcionesSeleccionadas.join(', ');
  motivosParrafo.textContent = `Motivos seleccionados: ${motivos}`;
});



const motivos = ['Cambios de prendas', 'Olvide mi usuario y contraseña', 'Como comprar', 'Seguimiento de pedido', 'Otros'];
const motivosActualizadosParrafo = document.getElementById('motivos-actualizados');

function agregarMotivo() {
  const nuevoMotivo = document.getElementById('nuevo-motivo').value;
  motivos.unshift(nuevoMotivo);
  motivosActualizadosParrafo.textContent = `Motivos actualizados: ${motivos.join(', ')}`;
}





const correos = ['correo1@example.com', 'correo2@example.com', 'correo3@example.com'];
const resultadoEmail = document.getElementById('resultado-email');

function verificarEmail() {
  const nuevoEmail = document.getElementById('nuevo-email').value;
  const existe = correos.includes(nuevoEmail);

  if (existe) {
    resultadoEmail.textContent = `El correo ${nuevoEmail} ya está registrado.`;
  } else {
    resultadoEmail.textContent = `El correo ${nuevoEmail} no está registrado.`;
  }
}





function verificarNumero() {
  const numero = document.getElementById('numero').value;
  const contieneCero = numero.includes('0');

  if (contieneCero) {
    resultadoNumero.textContent = `El número contiene el dígito 0.`;
  } else {
    resultadoNumero.textContent = `El número no contiene el dígito 0.`;
  }
}

const resultadoNumero = document.getElementById('resultado-numero');

// Obtener una referencia al formulario y al elemento donde se mostrará el mensaje
var formulario = document.getElementById("loginForm");
var mensajeDiv = document.getElementById("mensaje");

// Función para manejar el envío del formulario
function iniciarSesion(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores de los campos de usuario y contraseña
  var username = formulario.elements["username"].value;
  var password = formulario.elements["password"].value;

  // Verificar si los valores son válidos (aquí puedes implementar tu lógica de autenticación)
  if (username === "usuario" && password === "contraseña") {
    // Mostrar un mensaje de bienvenida
    mensajeDiv.textContent = "¡Bienvenido, " + username + "!";
  } else {
    // Mostrar un mensaje de error
    mensajeDiv.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
  }
}





// Función para agregar un artículo al carrito
function agregarAlCarrito(nombre, precio) {
  // Obtener el carrito actual desde localStorage
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Agregar el artículo al carrito
  carrito.push({ nombre, precio });

  // Actualizar el localStorage con el carrito actualizado
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar la visualización del carrito
  mostrarCarrito();
}

// Función para mostrar el carrito en la página
function mostrarCarrito() {
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  var listaCarrito = document.getElementById('carrito');
  var totalCarrito = document.getElementById('total');
  var total = 0;

  // Limpiar el carrito anterior
  listaCarrito.innerHTML = '';

  // Mostrar los elementos del carrito
  carrito.forEach(function (item) {
    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = item.nombre + ' - $' + item.precio.toFixed(2);
    listaCarrito.appendChild(nuevoElemento);
    total += item.precio;
  });

  // Mostrar el total
  totalCarrito.textContent = total.toFixed(2);
}

// Llamar a mostrarCarrito al cargar la página para cargar cualquier artículo previamente agregado al carrito desde localStorage
mostrarCarrito();



// Función para validar el formulario antes de enviarlo
function validarFormulario() {
  // Obtener referencias a los campos del formulario
  var nombreInput = document.getElementById('nombre');
  var apellidoInput = document.getElementById('apellido');
  var correoInput = document.getElementById('mail');
  var telefonoInput = document.getElementById('numero');
  var motivosSeleccionados = document.getElementById('motivos').selectedOptions;

  // Validar que el campo de nombre no esté vacío
  if (nombreInput.value.trim() === '') {
    alert('Por favor, ingrese su nombre.');
    nombreInput.focus();
    return false;
  }

  // Validar que el campo de apellido no esté vacío
  if (apellidoInput.value.trim() === '') {
    alert('Por favor, ingrese su apellido.');
    apellidoInput.focus();
    return false;
  }


  // Validar que el campo de correo electrónico sea válido
  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correoInput.value)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    correoInput.focus();
    return false;
  }

  // Validar que el campo de teléfono sea un número válido
  var telefonoRegex = /^[0-9]+$/;
  if (!telefonoRegex.test(telefonoInput.value)) {
    alert('Por favor, ingrese un número de teléfono válido.');
    telefonoInput.focus();
    return false;
  }

  // Validar que al menos un motivo de consulta se haya seleccionado
  if (motivosSeleccionados.length === 0) {
    alert('Por favor, seleccione al menos un motivo de consulta.');
    return false;
  }

  // Si todos los campos son válidos, el formulario se enviará
  return true;
}

var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
    }
});




function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;

  // Verificar si los campos están vacíos
  if (nombre === "" || apellido === "") {
      alert("Por favor, complete todos los campos.");
      return false; // Evita el envío del formulario
  }

  return true; // Envía el formulario si todos los campos están llenos
}
