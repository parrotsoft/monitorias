import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyRoutingModule } from './academy-routing.module';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { MaterialComponent } from './material/material.component';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  declarations: [AsignaturasComponent, EstudiantesComponent, MaterialComponent, AgendaComponent],
  imports: [
    CommonModule,
    AcademyRoutingModule
  ]
})
export class AcademyModule { }
