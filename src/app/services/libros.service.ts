import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getAll() {
    return LIBROS;
  }

  getByEscritor(escritorId: number): Promise<Libro[]> {
    return new Promise((resolve,reject) => {
      const libros = LIBROS.filter(libro => libro.escritor === escritorId);
      resolve(libros);
    });
  }
}