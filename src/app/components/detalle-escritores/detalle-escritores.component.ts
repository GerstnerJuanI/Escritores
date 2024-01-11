import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { EscritoresService } from '../../services/escritores.service';
import { Escritor } from '../../models/escritor.model';

@Component({
  selector: 'app-detalle-escritores',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detalle-escritores.component.html',
  styleUrl: './detalle-escritores.component.scss',
})
export class DetalleEscritoresComponent {
  escritor: Escritor | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritorService: EscritoresService
  ) {
  //this.escritor = new Escritor();

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      console.log(params['escritoresId']);
      this.escritor = await this.escritorService.getById(
        parseInt(params['escritoresId'])
      );
      console.log(this.escritor);
    });
  }
}
