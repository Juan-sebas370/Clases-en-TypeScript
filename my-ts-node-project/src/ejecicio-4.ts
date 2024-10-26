class FiguraGeometrica {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(nombre: string) {
        super(nombre);
    }

    area(base: number, altura: number) {
        let areaT = (base*altura)/2;
        console.log(`El área del triangulo es ${base}*${altura}/2 = ${areaT}`);
    }
}

class Circulo extends FiguraGeometrica {
    constructor(nombre: string) {
        super(nombre);
    }

    area(radio: number) {
        let areaCir = Math.PI*Math.pow(radio, 2)
        console.log(`El área del circulo con radio ${radio} es ${areaCir}`);
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(nombre: string) {
        super(nombre);
    }

    area(lado: number) {
        let areaC = lado*lado;
        console.log(`El area del cuadrado es ${areaC}`);
    }
}

const triangulo = new Triangulo("Triangle");
const circulo = new Circulo("circlr");
const cuadrado= new Cuadrado("square");

triangulo.area(8, 6);
circulo.area(5);
cuadrado.area(9);