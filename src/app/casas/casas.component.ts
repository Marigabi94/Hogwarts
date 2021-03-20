import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css'],
})
export class CasasComponent extends TablaComponent {
  ngOnInit(): void {}

  SeleccionCasa() {
    this.getAllEstudiantesCasas();
  }
  SeleccionP() {
    this.getAllProfesores();
  }
}
