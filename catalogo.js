alert("¡Atención, vas a entrar al mejor mercado de camisetas de Argentina, si no quieres gastar dinero, no entres!");

document.addEventListener("DOMContentLoaded", function () {
  const catalogo = [
    {
      imagen: "francia.jpg",
      nombre: "Camiseta Francia 2018",
      precio: 13999
    },
    {
      imagen: "seleccion.jpg",
      nombre: "Camiseta Selección Argentina 2014",
      precio: 13999
    },
    {
      imagen: "camiseta de boca.jpg",
      nombre: "Camiseta Boca Juniors Temporada 2011",
      precio: 13999
    }
    // Agrega más productos aquí
  ];

  function mostrarCatalogo() {
    const catalogoDiv = document.getElementById("catalogo");
    catalogo.forEach(function (camiseta) {
      const camisetaDiv = document.createElement("div");
      camisetaDiv.className = "camiseta";
      camisetaDiv.innerHTML = `
        <img src="../images/${camiseta.imagen}" alt="${camiseta.nombre}" style="max-width: 250px; display: block; margin: 0 auto;">
        <h3>${camiseta.nombre}</h3>
        <p style="text-align: center;">Precio: $${camiseta.precio.toFixed(2)}</p>
        <button class="agregarCarrito" data-nombre="${camiseta.nombre}" data-precio="${camiseta.precio}">Agregar al Carrito</button>
      `;
      catalogoDiv.appendChild(camisetaDiv);
    });
  }

  mostrarCatalogo();

  const carrito = document.getElementById("carrito");
  const totalCarrito = document.getElementById("totalCarrito");

  function actualizarCarrito() {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.innerHTML = "";
    let total = 0;

    if (carritoActual.length === 0) {
      const mensajeCarritoVacio = document.createElement("p");
      mensajeCarritoVacio.textContent = "El carrito está vacío.";
      carrito.appendChild(mensajeCarritoVacio);
    } else {
      carritoActual.forEach(function (item, index) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;

        // Agregar botón para eliminar el elemento
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
          // Eliminar el elemento del carritoActual por su índice
          carritoActual.splice(index, 1);
          // Actualizar el LocalStorage con el carrito actualizado
          localStorage.setItem("carrito", JSON.stringify(carritoActual));
          // Actualizar la vista del carrito
          actualizarCarrito();
        });

        nuevoElemento.appendChild(botonEliminar);
        carrito.appendChild(nuevoElemento);
        total += item.precio;
      });
    }

    totalCarrito.textContent = total.toFixed(2);
  }

  const botonesAgregar = document.querySelectorAll(".agregarCarrito");

  botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const nombre = boton.getAttribute("data-nombre");
      const precio = parseFloat(boton.getAttribute("data-precio"));

      const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

      carritoActual.push({ nombre, precio });

      localStorage.setItem("carrito", JSON.stringify(carritoActual));

      actualizarCarrito();
    });
  });

  actualizarCarrito();

  // Agregar botón para reiniciar el carrito
  const reiniciarCarritoBtn = document.getElementById("reiniciarCarrito");
  reiniciarCarritoBtn.addEventListener("click", function () {
    // Limpiar el carrito actual y el LocalStorage
    localStorage.removeItem("carrito");
    // Actualizar la vista del carrito
    actualizarCarrito();
  });
});


// Agrega esta función al código existente
function finalizarCompra() {
  // Obtener el carrito actual desde el LocalStorage
  const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carritoActual.length === 0) {
    alert("No puedes finalizar la compra porque el carrito está vacío.");
  } else {
    // Calcula el precio total
    let total = 0;
    carritoActual.forEach(function (item) {
      total += item.precio;
    });

    // Simplemente muestra un mensaje con el precio total
    alert(`Compra finalizada. Total a pagar: $${total.toFixed(2)}`);

    // Limpia el carrito
    localStorage.removeItem("carrito");
    actualizarCarrito(); // Actualiza la vista del carrito
  }
}

// Agrega un evento clic al botón "Finalizar Compra"
const finalizarCompraBtn = document.getElementById("finalizarCompra");
finalizarCompraBtn.addEventListener("click", finalizarCompra);

