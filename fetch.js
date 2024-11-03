fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        if (!res.ok) {
            throw new Error('La respuesta de la red no fue correcta');
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        datospintados(data);
    })
    .catch((error) => {
        console.error('Hubo un problema con la operación de búsqueda.:', error);
    });

const datospintados = (datos) => {
    // Crear un contenedor para los datos
    const container = document.createElement('div');
    container.style.display = 'wrap';
    container.style.flexWrap = 'wrap';
    container.style.gap = '10px'; // Espacio entre las cajas
    container.style.borderRadius = '10px';
    document.body.appendChild(container); // Agregar contenedor al cuerpo del documento

    for (let i = 0; i < datos.length; i) {
        // Crear un div para cada usuario
        const userBox = document.createElement('div');
        userBox.style.border = '1px solid #ccc';
        userBox.style.borderRadius = '5px';
        userBox.style.padding = '15px';
        userBox.style.width = '200px'; // Ancho fijo para la caja
        userBox.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.1)';
        userBox.style.background = '#CC5500';

        // Extraer datos específicos
        const name = datos[i].name;
        const email = datos[i].email;
        const address = `${datos[i].address.street}`;

        // Crear elementos para mostrar los datos
        userBox.innerHTML = `
            <strong>${name}</strong><br>
            Email: ${email}<br>
            Dirección: ${address}
        `;

        // Agregar la caja del usuario al contenedor
        container.appendChild(userBox);
    }
};

