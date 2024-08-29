// Traer valores del HTML
const NombreProducto = document.getElementById('productName');
const PrecioProducto = document.getElementById('productPrice');
const Boton = document.getElementById('addButton');
const TablaProducto = document.getElementById('productTableBody');
const PrecioTotal = document.getElementById('totalPrice');

// Variable para acumular el total
let total = 0;

// Función para actualizar el total en la tabla
const updateTotal = () => {
    PrecioTotal.textContent = total.toFixed(2);
};

// Función para agregar un producto  a la tabla
const addProduct = () => {

    // Obtiene los valores de los inputs
    const name = NombreProducto.value;
    const price = parseFloat(PrecioProducto.value);

    // Verifica si los campos están llenos y si el precio es válido
    if (name && !isNaN(price) && price > 0) {
        // Crea una nueva fila en la tabla
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td>${name}</td>
            <td>${price.toFixed(2)}</td>
        `; // row.innerHTML sirve para agregar los valores a la tabla

        TablaProducto.appendChild(row);

        // Actualiza el total
        total += price; // calculamos el valor de total mas el precio agregar
        updateTotal();

        // Limpia los inputs
        NombreProducto.value = '';
        PrecioProducto.value = '';
    } else {
        alert('Por favor, ingresa un nombre y un precio válido.');
    }
};

// evento click
Boton.addEventListener('click', () => addProduct());
