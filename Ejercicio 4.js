// Clase para gestionar el sistema de turnos del banco
class SistemaTurnos {
    constructor() {
        this.cola = []; // Array que representa la cola de espera
        this.contadorTurnos = 0; // Contador para los turnos tomados
    }

    // Método para que un cliente tome un turno
    tomarTurno() {
        this.contadorTurnos++; // Incrementa el contador total de turnos
        let turno = this.contadorTurnos; // Asigna el número de turno actual
        this.cola.push(turno); // Añade el turno a la cola
        console.log(`Turno ${turno} tomado. Su turno ha sido agregado a la cola.`);
        return turno;
    }

    // Método para que un empleado llame al siguiente cliente en la cola
    llamarCliente() {
        if (this.cola.length === 0) {
            console.log("No hay clientes en la cola.");
            return null;
        } else {
            let turnoLlamado = this.cola.shift(); // Remueve y retorna el primer turno de la cola
            console.log(`Cliente con turno ${turnoLlamado}, por favor acérquese.`);
            return turnoLlamado;
        }
    }

    // Método para mostrar la cola actual de espera
    mostrarColaEspera() {
        if (this.cola.length === 0) {
            console.log("No hay clientes en la cola de espera.");
        } else {
            console.log(`Cola de espera: ${this.cola.join(', ')}.`);
        }
    }

    // Método para mostrar el total de turnos tomados hasta el momento
    mostrarContadorTurnos() {
        console.log(`Total de turnos tomados hasta ahora: ${this.contadorTurnos}.`);
    }
}

// Crear una instancia del sistema de turnos
let sistemaTurnos = new SistemaTurnos();

// Simulamos el proceso de tomar turnos y llamar a clientes

// Tomar turnos
sistemaTurnos.tomarTurno();  // Turno 1
sistemaTurnos.tomarTurno();  // Turno 2
sistemaTurnos.tomarTurno();  // Turno 3

// Mostrar la cola de espera
sistemaTurnos.mostrarColaEspera();  // Cola: 1, 2, 3

// Llamar a los clientes
sistemaTurnos.llamarCliente();  // Llamar turno 1
sistemaTurnos.llamarCliente();  // Llamar turno 2

// Mostrar la cola de espera después de llamar a algunos clientes
sistemaTurnos.mostrarColaEspera();  // Cola: 3

// Tomar más turnos
sistemaTurnos.tomarTurno();  // Turno 4

// Mostrar la cola de espera nuevamente
sistemaTurnos.mostrarColaEspera();  // Cola: 3, 4

// Mostrar el total de turnos tomados hasta el momento
sistemaTurnos.mostrarContadorTurnos();  // Total de turnos: 4
