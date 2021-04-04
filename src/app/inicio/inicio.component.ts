import { Component, Input, OnInit, Output } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { Init } from '../../assets/js/ScriptSnow.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent extends TablaComponent implements OnInit {
  ngOnInit() {
    this.Snow(1);
  }
}
