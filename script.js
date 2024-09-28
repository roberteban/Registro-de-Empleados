// Array para almacenar los empleados
let empleados = [];

// Constructor del objeto Empleado
class Empleado {
    constructor(legajo, nombre, apellido, fechaNacimiento, cargo) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.cargo = cargo;
    }
}

// Función para agregar un empleado al array
function agregarEmpleado() {
    // Obtener los valores de los inputs
    const legajo = document.getElementById('legajo').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const cargo = document.getElementById('cargo').value;

    // Crear un nuevo objeto Empleado
    const nuevoEmpleado = new Empleado(legajo, nombre, apellido, fechaNacimiento, cargo);

    // Agregar el nuevo empleado al array
    empleados.push(nuevoEmpleado);

    // Limpiar los inputs después de agregar el empleado
    document.getElementById('empleado-form').reset();

    // Mensaje de confirmación
    alert("Empleado agregado correctamente.");
}

// Función para listar todos los empleados
function listarEmpleados() {
    // Verificamos si hay empleados en el array
    if (empleados.length === 0) {
        alert("No hay empleados registrados.");
        return;
    }

    // Inicializamos una cadena para almacenar la lista de empleados
    let listaEmpleados = "";

    // Utilizamos un ciclo For In para recorrer el array y mostrar cada empleado
    for (let i in empleados) {
        listaEmpleados += `Empleado ${parseInt(i) + 1}:\n`;
        for (let propiedad in empleados[i]) {
            listaEmpleados += `${propiedad}: ${empleados[i][propiedad]}\n`;
        }
        listaEmpleados += `----------------------\n`;
    }

    // Mostrar la lista en un alert
    alert(listaEmpleados);
}
