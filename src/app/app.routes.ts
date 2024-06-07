import { Routes } from '@angular/router';
import { FichasComponent } from './fichas/fichas.component';
import { FichaDetallesComponent } from './ficha-detalles/ficha-detalles.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path : '', 
        component: FichasComponent,
        title: 'Fichas curriculalres'
    },
    {
        path : 'fichas/:id', 
        component: FichaDetallesComponent,
        title: 'Fichas curriculalres'
    },
    {
        path: 'auth',
        loadChildren : () => import ('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'admin',
        loadChildren : () => import ('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {   path: 'perfil',
        redirectTo: '', 
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent },
];
