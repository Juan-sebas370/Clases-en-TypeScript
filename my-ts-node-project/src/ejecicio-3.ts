class Vehiculo {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
}

class Coche extends Vehiculo {
    constructor(tipo: string) {
        super(tipo);
    }

    desplazarse() {
        console.log(`El coche ${this.tipo} se desplaza por las carreteras del pais`);
    }
}

class Barco extends Vehiculo {
    constructor(tipo: string) {
        super(tipo);
    }

    desplazarse() {
        console.log(`El barco ${this.tipo} se desplaza por los mares y ocenaos del mundo`);
    }
}

class Avion extends Vehiculo {
    constructor(tipo: string) {
        super(tipo);
    }

    desplazarse() {
        console.log(`El avion ${this.tipo} se desplaza por volando por los aires`);
    }
}

const MiCoche = new Coche("Subaru");
const MiBarco = new Barco("Poseidon");
const MiAvion= new Avion("Airbus 330");

MiCoche.desplazarse();
MiBarco.desplazarse();
MiAvion.desplazarse();