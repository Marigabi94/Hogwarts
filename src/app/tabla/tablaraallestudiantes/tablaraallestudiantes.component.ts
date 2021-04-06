import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TablaComponent } from '../tabla.component';

@Component({
  selector: 'app-tablaraallestudiantes',
  templateUrl: './tablaraallestudiantes.component.html',
  styleUrls: [
    './tablaraallestudiantes.component.css',
    '../tabla.component.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablaraallestudiantesComponent
  extends TablaComponent
  implements OnInit {
  ngOnInit(): void {
    this.getAllEstudiantes();
  }
}
