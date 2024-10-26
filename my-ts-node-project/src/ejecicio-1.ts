class Persona {
    nombre: string;
    edad: number;
    identidad: number;

    constructor(nombre: string, edad: number, identidad: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.identidad =identidad;
    }

    saludar() {
        console.log(`Soy ${this.nombre}, tengo ${this.edad} años y mi documento es ${this.identidad}`);
    }

    caminar() {
        console.log(`${this.nombre} está caminando`);
    }

    hablar() {
        console.log(`${this.nombre} está hablando`);
    }

    comer() {
        console.log(`${this.nombre} está comiendo`);
    }
}

const Sebas = new Persona("sebastian", 36, 157848578);

Sebas.saludar();
Sebas.caminar();
Sebas.hablar();
Sebas.comer();