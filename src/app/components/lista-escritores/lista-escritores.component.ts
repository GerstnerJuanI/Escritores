import { Component } from '@angular/core';
import { EscritoresService } from '../../services/escritores.service';
import { Escritor } from '../../models/escritor.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-escritores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-escritores.component.html',
  styleUrl: './lista-escritores.component.scss'
})
export class ListaEscritoresComponent {

  arrEscritores: Escritor[] = [];

  constructor(private escritoresService: EscritoresService){

  }
  // ngOnInit(): void{
  //   //this.arrEscritores = this.escritoresService.getAll();
  //   this.escritoresService.getAllPromises().then(escritores => {
  //     this.arrEscritores = escritores;
  //   });
  // }
  async ngOnInit(){
    this.arrEscritores = await this.escritoresService.getAllPromises();
  }

  async onChange($event: any){
    console.log($event.target.value);
    if ($event.target.value === '') {
      this.arrEscritores = await this.escritoresService.getAllPromises();
    } else {
      this.arrEscritores = await this.escritoresService.getByPais(
        $event.target.value
      );
    }
  }
}
