// Arreglo para almacenar las citas
let citas = [];

// Función para programar una cita
function programarCita() {
  const nombrePaciente = prompt('Ingrese el nombre del paciente:');
  const fecha = prompt('Ingrese la fecha de la cita (formato AAAA-MM-DD):');
  const hora = prompt('Ingrese la hora de la cita (formato HH:MM):');
  const medicoAsignado = prompt('Ingrese el nombre del médico asignado:');

  const nuevaCita = {
    nombrePaciente,
    fecha,
    hora,
    medicoAsignado
  };

  citas.push(nuevaCita);
  console.log(`Cita programada con éxito para ${nombrePaciente} con el Dr./Dra. ${medicoAsignado} el ${fecha} a las ${hora}.`);
}

// Función para ver las citas programadas
function verCitas() {
  if (citas.length === 0) {
    console.log('No hay citas programadas.');
    return;
  }

  // Ordenar las citas por fecha y hora
  citas.sort((a, b) => {
    const fechaHoraA = new Date(`${a.fecha}T${a.hora}`);
    const fechaHoraB = new Date(`${b.fecha}T${b.hora}`);
    return fechaHoraA - fechaHoraB;
  });

  console.log('--- Citas Programadas ---');
  citas.forEach((cita, index) => {
    console.log(`${index + 1}. Paciente: ${cita.nombrePaciente} - Fecha: ${cita.fecha} - Hora: ${cita.hora} - Médico: ${cita.medicoAsignado}`);
  });
}

// Función para cancelar una cita
function cancelarCita() {
  if (citas.length === 0) {
    console.log('No hay citas programadas para cancelar.');
    return;
  }

  verCitas();
  const numeroCita = parseInt(prompt('Ingrese el número de la cita que desea cancelar:'));

  if (numeroCita > 0 && numeroCita <= citas.length) {
    const citaCancelada = citas.splice(numeroCita - 1, 1); // Eliminamos la cita del array
    console.log(`Cita de ${citaCancelada[0].nombrePaciente} con el Dr./Dra. ${citaCancelada[0].medicoAsignado} ha sido cancelada.`);
  } else {
    console.log('Número de cita no válido.');
  }
}

// Función principal para manejar el sistema de gestión de citas
function iniciarSistemaCitas() {
  let continuar = true;
  while (continuar) {
    console.log('--- Sistema de Gestión de Citas Médicas ---');
    console.log('1. Programar una cita');
    console.log('2. Ver citas programadas');
    console.log('3. Cancelar una cita');
    console.log('4. Salir');
    const opcion = parseInt(prompt('Seleccione una opción:'));

    switch (opcion) {
      case 1:
        programarCita();
        break;
      case 2:
        verCitas();
        break;
      case 3:
        cancelarCita();
        break;
      case 4:
        continuar = false;
        console.log('Saliendo del sistema de gestión de citas.');
        break;
      default:
        console.log('Opción no válida. Intente nuevamente.');
    }
  }
}

// Iniciar el sistema de gestión de citas
iniciarSistemaCitas();
