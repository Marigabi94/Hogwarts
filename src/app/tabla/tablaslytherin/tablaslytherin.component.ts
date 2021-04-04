import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TablaComponent } from '../tabla.component';

@Component({
  selector: 'app-tablaslytherin',
  templateUrl: './tablaslytherin.component.html',
  styleUrls: ['./tablaslytherin.component.css', '../tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablaslytherinComponent extends TablaComponent implements OnInit {
  ngOnInit(): void {
    this.getEstudiantesCasas('slytherin');
  }
}
