import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FichasDashboardComponent } from './fichas-dashboard/fichas-dashboard.component';
import { FichasEditarComponent } from './fichas-editar/fichas-editar.component';

//--- 
import { GeneralesComponent } from './perfil/generales/generales.component';
import { ActivismoComponent } from './perfil/activismo/activismo.component';
import { HistorialComponent } from './perfil/historial/historial.component';
import { SeguridadComponent } from './perfil/seguridad/seguridad.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent,
         children: [
            { path: '', component: FichasDashboardComponent },
            { 	path: 'editar', component: FichasEditarComponent,
	            title: 'Editar perfiles',
	            children : [ 
                    {   path : 'generales',  
                        title: 'Datos generales',		            
                        component: GeneralesComponent
	                },
                    {   path : 'activismo',  
                        title: 'Activismo',		            
                        component: ActivismoComponent
	                },
                    {   path : 'historial',  
                        title: 'Historial Académico',		            
                        component: HistorialComponent
	                },
                    {   path : 'seguridad',  
                        title: 'Perfil de seguridad',		            
                        component: SeguridadComponent
	                }
                ]
            }
        ]
    }
];