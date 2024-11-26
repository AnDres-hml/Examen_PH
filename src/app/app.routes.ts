import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadComponent: () => import('./pag/inicio/inicio.page').then((m) => m.InicioPage) },
  { path: 'formulario', loadComponent: () => import('./pag/formulario/formulario.page').then((m) => m.FormularioPage) },
  { path: '**', redirectTo: 'inicio' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



