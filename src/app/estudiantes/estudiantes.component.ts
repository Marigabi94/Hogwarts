import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent extends TablaComponent implements OnInit {
  ngOnInit() {
    this.Snow(2);
  }
}
