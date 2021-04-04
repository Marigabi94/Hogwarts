import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TablaComponent } from '../tabla.component';

@Component({
  selector: 'app-tablaravenclaw',
  templateUrl: './tablaravenclaw.component.html',
  styleUrls: ['./tablaravenclaw.component.css', '../tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablaravenclawComponent extends TablaComponent implements OnInit {
  ngOnInit(): void {
    this.getEstudiantesCasas('ravenclaw');
  }
}
