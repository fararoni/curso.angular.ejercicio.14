import { Routes } from "@angular/router";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTES: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent }
];