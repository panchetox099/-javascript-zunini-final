async function cargarMensajePresentativo() {
    try {
        const response = await fetch('URL_DE_TU_API_AQUI'); // Reemplaza 'URL_DE_TU_API_AQUI' con la URL real de tu API de mensajes.

        if (!response.ok) {
            throw new Error(`La solicitud no fue exitosa (${response.status})`);
        }

        const data = await response.json();
        const mensajePresentativo = document.getElementById('mensajePresentativo');
        mensajePresentativo.textContent = data.mensaje;
    } catch (error) {
        console.error('Error:', error.message);
        const mensajePresentativo = document.getElementById('mensajePresentativo');
        mensajePresentativo.textContent = 'Hubo un error al cargar el mensaje de bienvenida.';
    }
}

// Llamamos a la función para cargar el mensaje presentativo al cargar la página.
cargarMensajePresentativo();


