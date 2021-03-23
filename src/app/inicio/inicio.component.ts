import { Component, Input, OnInit, Output } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { Init } from '../../assets/js/ScriptSnow.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent extends TablaComponent implements OnInit {
  ButtonOpcionInicio(opcion: number) {
    switch (opcion) {
      case 1:
        this.getUse = 1;
        break;
      case 2:
        this.getUse = 2;
        break;
    }
  }

  ngOnInit() {}
}
