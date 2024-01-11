import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Libro } from '../../models/libro.model';
@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.scss'
})
export class ListaLibrosComponent {
  libros: Libro[] = [];
  constructor(
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute){
  }
  ngOnInit():void {
    this.activatedRoute.parent?.params.subscribe(async params => {
      const libros = await this.librosService.getByEscritor(
        parseInt(params['escritoresId'])
      );
      this.libros = libros;
    });
  }
}