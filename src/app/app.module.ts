import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CasasComponent } from './casas/casas.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';

@NgModule({
  declarations: [AppComponent, CasasComponent, EstudiantesComponent, ProfesoresComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
