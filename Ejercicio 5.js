// Lista de productos disponibles en la tienda
const productos = [
    { nombre: "Televisor", precio: 1200, stock: 10 },
    { nombre: "Celular", precio: 800, stock: 5 },
    { nombre: "Laptop", precio: 1500, stock: 3 },
    { nombre: "Auriculares", precio: 100, stock: 15 },
    { nombre: "Teclado", precio: 50, stock: 20 }
];

// Carrito de compras del usuario
let carrito = [];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    mostrarProductos();
    const seleccion = parseInt(prompt("Ingrese el número del producto que desea agregar al carrito:"), 10);
    const cantidad = parseInt(prompt("Ingrese la cantidad que desea agregar:"), 10);
    
    const productoSeleccionado = productos[seleccion - 1]; // Selección basada en índice
    
    if (productoSeleccionado && cantidad > 0 && productoSeleccionado.stock >= cantidad) {
        // Verificar si el producto ya está en el carrito
        const itemCarrito = carrito.find(item => item.nombre === productoSeleccionado.nombre);
        
        if (itemCarrito) {
            // Si ya está en el carrito, incrementar la cantidad
            itemCarrito.cantidad += cantidad;
        } else {
            // Si no está en el carrito, agregarlo
            carrito.push({ 
                nombre: productoSeleccionado.nombre,
                precio: productoSeleccionado.precio,
                cantidad: cantidad 
            });
        }
        
        // Reducir el stock disponible del producto
        productoSeleccionado.stock -= cantidad;
        
        console.log(`${cantidad} unidad(es) de ${productoSeleccionado.nombre} añadida(s) al carrito.`);
    } else {
        console.log("Producto no disponible o cantidad no válida.");
    }
}

// Función para mostrar el contenido del carrito y calcular el total
function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }
    
    let total = 0;
    
    console.log("Contenido del carrito:");
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        console.log(`${index + 1}. Producto: ${item.nombre}, Cantidad: ${item.cantidad}, Precio: $${item.precio}, Subtotal: $${subtotal}`);
    });
    
    console.log(`Total de la compra: $${total}`);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
}

// Menú principal
function mostrarMenu() {
    let opcion;
    
    do {
        console.log("\nMenú de Carrito de Compras:");
        console.log("1. Mostrar productos disponibles");
        console.log("2. Agregar productos al carrito");
        console.log("3. Mostrar contenido del carrito");
        console.log("4. Vaciar el carrito");
        console.log("5. Salir");
        
        opcion = prompt("Seleccione una opción (1-5):");
        
        switch (opcion) {
            case '1':
                mostrarProductos();
                break;
            case '2':
                agregarAlCarrito();
                break;
            case '3':
                mostrarCarrito();
                break;
            case '4':
                vaciarCarrito();
                break;
            case '5':
                console.log("Gracias por su compra. ¡Hasta pronto!");
                break;
            default:
                console.log("Opción no válida. Inténtelo de nuevo.");
                break;
        }
    } while (opcion !== '5');
}

// Ejecutar el programa
mostrarMenu();
