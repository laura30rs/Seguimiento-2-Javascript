// Definimos la clase Cliente
class Cliente {
    constructor(identificacion, pin, cuentas) {
        this.identificacion = identificacion;
        this.pin = pin;
        this.cuentas = cuentas; // Un array de objetos Cuenta
    }

    // Método para validar el PIN
    validarPin(ingresado) {
        return this.pin === ingresado;
    }
}

// Definimos la clase Cuenta
class Cuenta {
    constructor(id, saldo) {
        this.id = id;
        this.saldo = saldo;
    }

    // Método para realizar retiros
    retirar(monto) {
        if (monto % 50000 !== 0) {
            return 'El monto debe ser un múltiplo de 50,000.';
        }
        if (monto <= this.saldo) {
            this.saldo -= monto;
            return `Retiro exitoso: $${monto}. Puede retirar el dinero.`;
        } else {
            return 'Saldo insuficiente.';
        }
    }

    // Método para realizar depósitos
    depositar(monto, tipo) {
        if (tipo === "efectivo" || tipo === "cheque") {
            this.saldo += monto;
            return `Depósito de ${tipo} exitoso: $${monto}.`;
        } else {
            return 'Tipo de depósito inválido.';
        }
    }

    // Método para consultar el saldo
    consultarSaldo() {
        return `Saldo disponible: $${this.saldo}.`;
    }

    // Método para transferir dinero
    transferir(monto, cuentaDestino) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            cuentaDestino.saldo += monto;
            return `Transferencia de $${monto} a la cuenta ${cuentaDestino.id} exitosa.`;
        } else {
            return 'Saldo insuficiente para la transferencia.';
        }
    }
}

// Simulación de la interacción con el cajero automático
function atm(cliente) {
    let intentos = 0;

    // Bucle para ingresar el PIN
    while (intentos < 3) {
        let pinIngresado = prompt("Ingrese su PIN de 4 dígitos:");
        if (cliente.validarPin(pinIngresado)) {
            mostrarMenu(cliente);
            return;
        } else {
            intentos++;
            alert(`PIN incorrecto. Intento ${intentos} de 3.`);
        }
    }
    alert("Demasiados intentos fallidos. Adiós.");
}

// Función para mostrar el menú de opciones
function mostrarMenu(cliente) {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una opción:\n1. Retirar\n2. Depositar\n3. Transferir\n4. Consultar Saldo\n5. Salir");
        
        switch (opcion) {
            case '1': // Retirar
                let montoRetiro = parseInt(prompt("Ingrese el monto a retirar (múltiplo de $50,000):"));
                alert(cliente.cuentas[0].retirar(montoRetiro)); // Retira de la primera cuenta
                break;
            
            case '2': // Depositar
                let montoDeposito = parseInt(prompt("Ingrese el monto a depositar:"));
                let tipoDeposito = prompt("¿Es efectivo o cheque?");
                alert(cliente.cuentas[0].depositar(montoDeposito, tipoDeposito)); // Deposita en la primera cuenta
                break;
            
            case '3': // Transferir
                let montoTransferir = parseInt(prompt("Ingrese el monto a transferir:"));
                let cuentaDestino = cliente.cuentas[1]; // Supongamos que transfiere a la segunda cuenta
                alert(cliente.cuentas[0].transferir(montoTransferir, cuentaDestino));
                break;

            case '4': // Consultar Saldo
                alert(cliente.cuentas[0].consultarSaldo()); // Consulta saldo de la primera cuenta
                break;

            case '5': // Salir
                continuar = false;
                alert("Gracias por usar el cajero automático.");
                break;

            default:
                alert("Opción no válida. Inténtelo de nuevo.");
        }
    }
}

// Datos de ejemplo
let cuenta1 = new Cuenta(12345, 500000); // Cuenta 1 con 500,000 de saldo
let cuenta2 = new Cuenta(67890, 200000); // Cuenta 2 con 200,000 de saldo
let cliente1 = new Cliente("123456789", "1234", [cuenta1, cuenta2]); // Cliente con PIN y 2 cuentas

// Iniciar el cajero automático con el cliente
atm(cliente1);
