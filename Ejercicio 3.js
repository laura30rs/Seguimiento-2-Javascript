// Base de datos para almacenar las estadísticas
const estadisticas = {
    totalUsuarios: 0,
    atenciones: {
      llamadaTelefonica: 0,
      asesoria: {
        estudiantes: 0,
        directivos: 0
      }
    },
    transferencias: 0
  };
  
  // Función para registrar la atención
  function registrarAtencion() {
    const cedula = prompt('Ingrese su número de cédula:');
    console.log('Seleccione el tipo de atención:');
    console.log('1. Llamada Telefónica');
    console.log('2. Asesoría para Estudiantes');
    console.log('3. Asesoría para Directivos');
    const tipoAtencion = parseInt(prompt('Seleccione una opción (1, 2 o 3):'));
  
    switch (tipoAtencion) {
      case 1:
        estadisticas.atenciones.llamadaTelefonica++;
        break;
      case 2:
        estadisticas.atenciones.asesoria.estudiantes++;
        break;
      case 3:
        estadisticas.atenciones.asesoria.directivos++;
        break;
      default:
        console.log('Opción no válida.');
        return;
    }
  
    // Aumentamos el total de usuarios atendidos
    estadisticas.totalUsuarios++;
  
    console.log(`Atención registrada para el usuario con cédula: ${cedula}`);
  }
  
  // Función para transferir asesoría a llamada telefónica
  function transferirAsesoria() {
    console.log('Transfiriendo asesoría a llamada telefónica...');
    estadisticas.transferencias++;
    estadisticas.atenciones.llamadaTelefonica++;
  }
  
  // Función para mostrar las estadísticas
  function mostrarEstadisticas() {
    console.log('--- Estadísticas de Atención ---');
    console.log(`Total de usuarios atendidos: ${estadisticas.totalUsuarios}`);
    console.log(`Llamadas telefónicas: ${estadisticas.atenciones.llamadaTelefonica}`);
    console.log(`Asesorías para estudiantes: ${estadisticas.atenciones.asesoria.estudiantes}`);
    console.log(`Asesorías para directivos: ${estadisticas.atenciones.asesoria.directivos}`);
    console.log(`Transferencias de asesoría a llamada telefónica: ${estadisticas.transferencias}`);
  }
  
  // Función principal para manejar el flujo del sistema
  function iniciarSistema() {
    let continuar = true;
    while (continuar) {
      console.log('--- Sistema de Atención Universitaria ---');
      console.log('1. Registrar atención');
      console.log('2. Transferir asesoría a llamada telefónica');
      console.log('3. Mostrar estadísticas');
      console.log('4. Salir');
      const opcion = parseInt(prompt('Seleccione una opción:'));
  
      switch (opcion) {
        case 1:
          registrarAtencion();
          break;
        case 2:
          transferirAsesoria();
          break;
        case 3:
          mostrarEstadisticas();
          break;
        case 4:
          continuar = false;
          console.log('Saliendo del sistema...');
          break;
        default:
          console.log('Opción no válida. Intente nuevamente.');
      }
    }
  }
  
  // Iniciar el sistema de atención
  iniciarSistema();
  