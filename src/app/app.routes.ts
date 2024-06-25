import { Routes, RouterModule, provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';

export const routes: Routes =[
    {path: 'Contactos', component: ContactoComponent}
];
export const appRoutes = provideRouter(routes);
