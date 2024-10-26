class Electrodoméstico {
    color: string;
    precio: number;

    constructor(color: string, precio: number) {
        this.color = color;
        this.precio = precio;
    }
}

class Televisor extends Electrodoméstico {
    constructor(color: string, precio: number) {
        super(color, precio);
    }

    consultar() {
        console.log(`El televisor ${this.color} tiene un precio de ${this.precio}`);
    }
}

class Nevera extends Electrodoméstico {
    constructor(color: string, precio: number) {
        super(color, precio);
    }

    consultar() {
        console.log(`La nevera ${this.color} tiene un precio de ${this.precio}`);
    }
}

class Lavadora extends Electrodoméstico {
    constructor(color: string, precio: number) {
        super(color, precio);
    }

    consultar() {
        console.log(`La lavadora ${this.color} tiene un precio de ${this.precio}`);
    }
}

const televisor = new Televisor("Negro", 1800000);
const nevera = new Nevera("rojo", 250000);
const lavadora= new Lavadora("azul",254500);

televisor.consultar();
nevera.consultar();
lavadora.consultar();