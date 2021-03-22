import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css'],
})
export class CasasComponent extends TablaComponent {
  ngOnInit(): void {}

  SeleccionCasa(casa: number) {
    switch (casa) {
      case 1:
        this.getEstudiantesCasas((this.house = 'gryffindor'));
        break;
      case 2:
        this.getEstudiantesCasas((this.house = 'slytherin'));
        break;
      case 3:
        this.getEstudiantesCasas((this.house = 'hufflepuff'));
        break;
      case 4:
        this.getEstudiantesCasas((this.house = 'ravenclaw'));
        break;
    }
  }
}
