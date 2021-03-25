import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css'],
})
export class NuevoEstudianteComponent extends TablaComponent implements OnInit {
  ngOnInit(): void {}
}
