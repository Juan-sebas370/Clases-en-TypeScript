class Habitacion {
    numero: number;
    precio: number;
    estado: "disponible" | "reservada";

    constructor(numero: number, precio: number) {
        this.numero = numero;
        this.precio = precio;
        this.estado = "disponible";
    }

    reservar(): void {
        if (this.estado === "disponible") {
        this.estado = "reservada";
        console.log(`La habitación ${this.numero} ha sido reservada.`);
        } else {
        console.log(`La habitación ${this.numero} ya está reservada.`);
        }
    }

    liberar(): void {
        if (this.estado === "reservada") {
        this.estado = "disponible";
        console.log(`La habitación ${this.numero} ha sido liberada.`);
        } else {
        console.log(`La habitación ${this.numero} ya está disponible.`);
        }
    }
}

class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.habitaciones = [];
    }

    agregarHabitacion(habitacion: Habitacion): void {
        this.habitaciones.push(habitacion);
    }

    mostrarEstadoHabitaciones(): void {
        console.log(`Estado de las habitaciones en el hotel ${this.nombre}:`);
        this.habitaciones.forEach((habitacion) => {
        console.log(
            `Habitación ${habitacion.numero} - Estado: ${habitacion.estado} - Precio: $${habitacion.precio}`
        );
        });
    }
}

const hotelCentral = new Hotel("Hotel Central", "Ciudad Centro");

const habitacion101 = new Habitacion(101, 150);
const habitacion102 = new Habitacion(102, 200);
const habitacion103 = new Habitacion(103, 180);

hotelCentral.agregarHabitacion(habitacion101);
hotelCentral.agregarHabitacion(habitacion102);
hotelCentral.agregarHabitacion(habitacion103);

hotelCentral.mostrarEstadoHabitaciones();

habitacion101.reservar();
habitacion102.reservar();

habitacion101.reservar();

habitacion101.liberar();

habitacion101.liberar();

hotelCentral.mostrarEstadoHabitaciones();