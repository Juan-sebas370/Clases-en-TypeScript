class Pelicula {
    titulo: string;
    duracion: number; 
    director: string;
  
    constructor(titulo: string, duracion: number, director: string) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.director = director;
    }
}

class CatalogoPeliculas {
    peliculas: Pelicula[];
  
    constructor() {
      this.peliculas = [];
    }
  
    agregarPelicula(pelicula: Pelicula): void {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTitulo(titulo: string): Pelicula | undefined {
      return this.peliculas.find(
        (pelicula) => pelicula.titulo.toLowerCase() === titulo.toLowerCase()
      );
    }
  
    filtrarPorDirector(director: string): Pelicula[] {
      return this.peliculas.filter(
        (pelicula) => pelicula.director.toLowerCase() === director.toLowerCase()
      );
    }
  
    mostrarPeliculas(): void {
      console.log("Catálogo de Películas:");
      this.peliculas.forEach((pelicula) => {
        console.log(
          `Título: ${pelicula.titulo}, Duración: ${pelicula.duracion} mins, Director: ${pelicula.director}`
        );
      });
    }
}
  
const catalogo = new CatalogoPeliculas();

const pelicula1 = new Pelicula("Inception", 148, "Christopher Nolan");
const pelicula2 = new Pelicula("Interstellar", 169, "Christopher Nolan");
const pelicula3 = new Pelicula("The Matrix", 136, "Lana Wachowski y Lilly Wachowski");
const pelicula4 = new Pelicula("The Godfather", 175, "Francis Ford Coppola");

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);
catalogo.agregarPelicula(pelicula4);

catalogo.mostrarPeliculas();

const busquedaTitulo = catalogo.buscarPorTitulo("Inception");
console.log("Resultado de búsqueda por título 'Inception':", busquedaTitulo);

const filtradoDirector = catalogo.filtrarPorDirector("Christopher Nolan");
console.log("Películas dirigidas por Christopher Nolan:");
filtradoDirector.forEach((pelicula) => {
console.log(`Título: ${pelicula.titulo}, Duración: ${pelicula.duracion} mins`);
});
