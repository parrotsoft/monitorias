import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../../shared/layout/layout.component';
import {AsignaturasComponent} from './asignaturas/asignaturas.component';
import {EstudiantesComponent} from './estudiantes/estudiantes.component';
import {MaterialComponent} from './material/material.component';
import {AgendaComponent} from './agenda/agenda.component';

const routes: Routes = [
  { path: 'academy', component: LayoutComponent,
  children: [
    { path: 'asignaturas', component: AsignaturasComponent },
    { path: 'estudiantes', component: EstudiantesComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'agenda', component: AgendaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademyRoutingModule { }
