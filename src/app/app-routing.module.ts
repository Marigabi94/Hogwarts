import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CasasComponent } from './casas/casas.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoEstudianteComponent } from './nuevo-estudiante/nuevo-estudiante.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'casas', component: CasasComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'estudiantes/nuevo', component: NuevoEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
