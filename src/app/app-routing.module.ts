import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './components/routes/series/series.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'Inicio', pathMatch: 'full'
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'Peliculas',
    component: PeliculasComponent
  },
  {
    path: 'Series',
    component: SeriesComponent
  },
  {
    path: 'Ingresar',
    component: IngresarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
