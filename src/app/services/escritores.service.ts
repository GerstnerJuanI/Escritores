import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';
@Injectable({
  providedIn: 'root',
})
export class EscritoresService {
  constructor() {}
  getAll(): Escritor[] {
    return ESCRITORES;
  }
  getAllPromises(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES.filter((escritor) => escritor.pais === pais));
    });
  }

  getById(escritorId: number): Promise<Escritor | undefined> {
    return new Promise((resolve, reject) => {
      const escritorFound = ESCRITORES.find(
        (escritor) => escritor.id === escritorId
      );
      resolve(escritorFound);
    });
  }
}
