import { Routes } from '@angular/router';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { DetalleEscritoresComponent } from './components/detalle-escritores/detalle-escritores.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/escritores'
    },
    {
        path: 'escritores',
        component: ListaEscritoresComponent
    },
    {
        path: 'escritores/:escritoresId' ,
        component: DetalleEscritoresComponent, children: [
            {
                path: 'libros',
                component: ListaLibrosComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/escritores'
    }

];
