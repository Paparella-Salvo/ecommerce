import { Routes } from '@angular/router';
import { Pagina1 } from './componenti/pagina1/pagina1';
import { Pagina2 } from './componenti/pagina2/pagina2';
import { Pagina3 } from './componenti/pagina3/pagina3';

export const routes: Routes = [
    {path: '', component: Pagina1},
    {path: 'pagina1', component: Pagina1},
    {path: 'pagina2', component: Pagina2,},
    {path: 'pagina3', component: Pagina3},
];
