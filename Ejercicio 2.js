// Definimos la estructura para las habitaciones
const habitaciones = [
    { tipo: 'individual', maxPersonas: 2, fumador: false, reservada: false },
    { tipo: 'doble', maxPersonas: 4, fumador: false, reservada: false },
    { tipo: 'familiar', maxPersonas: 6, fumador: false, reservada: false, aceptaMascotas: true },
    { tipo: 'individual', maxPersonas: 2, fumador: true, reservada: false },
    { tipo: 'doble', maxPersonas: 4, fumador: true, reservada: false },
    { tipo: 'familiar', maxPersonas: 6, fumador: true, reservada: false, aceptaMascotas: true }
];

// Array para almacenar las reservas
const reservas = [];

// Función para realizar una reserva
function reservarHabitacion() {
    const nombre = prompt("Ingrese su nombre:");
    const pais = prompt("Ingrese su país de origen:");
    const numPersonas = parseInt(prompt("Ingrese el número de personas que ocuparán la habitación:"), 10);
    const tipoHabitacion = prompt("¿Qué tipo de habitación desea reservar? (individual/doble/familiar)");
    const fumador = prompt("¿Desea una habitación para fumadores? (si/no)").toLowerCase() === 'si';
    const mascota = prompt("¿Traerá una mascota? (si/no)").toLowerCase() === 'si';
    const diasEstadia = parseInt(prompt("Ingrese el número de días de estadía:"), 10);
    
    // Filtrar las habitaciones según las condiciones del cliente
    const habitacionesDisponibles = habitaciones.filter(h => 
        h.tipo === tipoHabitacion && 
        h.fumador === fumador && 
        !h.reservada && 
        h.maxPersonas >= numPersonas &&
        (!mascota || (mascota && h.aceptaMascotas))
    );
    
    // Verificar si hay habitaciones disponibles
    if (habitacionesDisponibles.length > 0) {
        const habitacionSeleccionada = habitacionesDisponibles[0]; // Seleccionamos la primera habitación disponible
        habitacionSeleccionada.reservada = true; // Marcar la habitación como reservada
        
        // Guardar la reserva
        reservas.push({
            nombre,
            pais,
            numPersonas,
            diasEstadia,
            mascota,
            tipoHabitacion,
            fumador,
            habitacion: habitacionSeleccionada
        });
        
        console.log(`Reserva exitosa para ${nombre}. Ha reservado una habitación ${tipoHabitacion} para ${numPersonas} personas por ${diasEstadia} días.`);
    } else {
        console.log("No hay habitaciones disponibles que cumplan con sus requisitos.");
    }
}

// Función para mostrar el total de habitaciones reservadas
function mostrarReservas() {
    console.log(`Total de habitaciones reservadas: ${reservas.length}`);
    reservas.forEach((reserva, index) => {
        console.log(`${index + 1}. Cliente: ${reserva.nombre}, País: ${reserva.pais}, Tipo: ${reserva.tipoHabitacion}, Personas: ${reserva.numPersonas}, Días: ${reserva.diasEstadia}, Mascota: ${reserva.mascota ? "Sí" : "No"}`);
    });
}

// Menú para la gestión de reservas
function mostrarMenu() {
    let opcion;
    
    do {
        console.log("\nMenú de Gestión de Reservas de Hotel:");
        console.log("1. Realizar una reserva");
        console.log("2. Mostrar reservas");
        console.log("3. Salir");
        
        opcion = prompt("Seleccione una opción (1-3):");
        
        switch (opcion) {
            case '1':
                reservarHabitacion();
                break;
            case '2':
                mostrarReservas();
                break;
            case '3':
                console.log("Gracias por usar el sistema de reservas. ¡Hasta pronto!");
                break;
            default:
                console.log("Opción no válida. Inténtelo de nuevo.");
                break;
        }
    } while (opcion !== '3');
}

// Ejecutar el programa
mostrarMenu();
