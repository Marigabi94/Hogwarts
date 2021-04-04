import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

// TODO: IMPORT MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

// TODO: IMPORT COMPONENTES Y MODULOS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasasComponent } from './casas/casas.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { TablaComponent } from './tabla/tabla.component';
import { NuevoEstudianteComponent } from './nuevo-estudiante/nuevo-estudiante.component';
import { InicioComponent } from './inicio/inicio.component';
import { TablagryffindorComponent } from './tabla/tablagryffindor/tablagryffindor.component';
import { TablaslytherinComponent } from './tabla/tablaslytherin/tablaslytherin.component';
import { TablahufflepuffComponent } from './tabla/tablahufflepuff/tablahufflepuff.component';
import { TablaravenclawComponent } from './tabla/tablaravenclaw/tablaravenclaw.component';
import { TablaraallestudiantesComponent } from './tabla/tablaraallestudiantes/tablaraallestudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    CasasComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    InicioComponent,
    TablaComponent,
    NuevoEstudianteComponent,
    TablagryffindorComponent,
    TablaslytherinComponent,
    TablahufflepuffComponent,
    TablaravenclawComponent,
    TablaraallestudiantesComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MaterialFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
