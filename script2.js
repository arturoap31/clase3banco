<<<<<<< HEAD
// funciones dentro de eventos con arrow metodos de array
=======
//Funciones dentro de Eventos con Arrow Métodos de array


/*
Crea una página con una lista de elementos (<li></li>). Usa un evento click y una 
función de flecha para cambiar el color de fondo de cada elemento cuando se haga click
*/

document.querySelectorAll('#colorList li').forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = 'lightblue';
    });
});


/*

Crea una lista de checkbox con varias opciones y un botón. Al click en el botón, usa un evento click y una
función de flecha para filtrar y mostrar solo las opciones seleccionadas en la consola.

*/

document.getElementById('showSelected').addEventListener('click', () => {
    const selectedOptions = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(checkbox => checkbox.value);
    console.log(selectedOptions);
});

/*
Usa un evento mouseover y una función de flecha para mostrar un mensaje en la consola cuando el mouse
pase por encima de un botón.
*/

document.getElementById('hoverButton').addEventListener('mouseover', () => {
    console.log("El mouse está sobre el boton.!");
});


/*
Tienes un array de objetos que representan productos.
Usa un evento click y una función flecha para filtrar los productos que cuestan más
de 20, ordenalos por precio y mostrarlos en la consola.

*/

const products = [
    {name: 'Product 1', price: 15},
    {name: 'Product 2', price: 25},
    {name: 'Product 3', price: 30},
    {name: 'Product 4', price: 10}
];

document.getElementById('filterSort').addEventListener('click', () => {
    const filteredSortProducts = products
    .filter(product => product.price > 20)
    .sort((a,b) => a.price - b.price);
    console.log(filteredSortProducts);
});




 /*
    
    BANCO DE PREGUNTAS


    1. Crea un formulario donde los usuarios puedan agregar tareas. Cuando se agrega una tarea, genera dinámicamente una lista de tareas (<ul>). Usa un evento click y una función de flecha para ordenar las tareas alfabéticamente cada vez que se agrega una nueva tarea. (JAMES)

    2. Tienes un array de objetos que representan usuarios con propiedades como name, age, y active. Usa un evento click y funciones de flecha para filtrar usuarios activos mayores de 30 años, mapear sus nombres a mayúsculas y ordenarlos por nombre antes de mostrarlos en la consola. (GIANCARLO)

    3. Crea una interfaz donde se puedan agregar productos (nombre y precio) a una tabla. Usa un evento click y funciones de flecha para agregar un nuevo producto, calcular y actualizar automáticamente el total de precios en la tabla. (ARTURO)
    
    4. Usa un evento click para filtrar un array de objetos que representen productos según una condición (por ejemplo, precio mayor a 20). Luego, usa reduce() con una función de flecha para agruparlos por categoría antes de mostrar el resultado en la consola. (CHRISTIAN)

    5. Crea un input de búsqueda que filtre dinámicamente una lista de palabras a medida que el usuario escribe. Usa un evento input y funciones de flecha para filtrar y mostrar las coincidencias en tiempo real. (CHRISTIAN)


    */


>>>>>>> 4058c04499ae9796ccbe583191d1cd8b2e935d63
