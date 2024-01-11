export class Libro {
  id: number;
  titulo: string;
  imagen: string;
  publicado: number;
  escritor: number;
  constructor(id: number, titulo: string, imagen: string, publicado: number, escritor: number) {
    this.id = id;
    this.titulo = titulo;
    this.imagen = imagen;
    this.publicado = publicado;
    this.escritor = escritor;
  }
}
