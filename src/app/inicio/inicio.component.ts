import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent extends TablaComponent {
  ButtonEstudiantes() {
    this.getAllEstudiantes();
  }
  ButtonProfesores() {
    this.getAllProfesores();
  }
}
