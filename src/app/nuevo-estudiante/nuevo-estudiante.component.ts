import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css'],
})
export class NuevoEstudianteComponent extends TablaComponent implements OnInit {
  myForm: FormGroup;
  nombre: string;
  apellido: string;
  patronus: string;
  foto: any;
  fechanacimiento: any;
  ngOnInit() {
    this.reactiveForm();
    this.Snow(2);
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      patronus: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      fechanacimiento: ['', [Validators.required]],
    });
  }
}
