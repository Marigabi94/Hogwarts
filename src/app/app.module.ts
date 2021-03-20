import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CasasComponent } from './casas/casas.component';
import { CasasService } from './casas/casas.service';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from './tabla/tabla.component';
import { NuevoEstudianteComponent } from './nuevo-estudiante/nuevo-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    CasasComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    InicioComponent,
    TablaComponent,
    NuevoEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [CasasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
