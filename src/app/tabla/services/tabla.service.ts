import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PersonasElement } from '../../../app/tabla/tabla.component';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  constructor(private http: HttpClient) {}

  getAllEstudiantes() {
    const path = 'http://hp-api.herokuapp.com/api/characters/students';
    return this.http.get<PersonasElement>(path);
  }

  getAllEstudiantesCasas() {
    const path =
      'http://hp-api.herokuapp.com/api/characters/house/{{nombreCasa}}';

    return this.http.get<PersonasElement>(path);
  }

  getAllProfesores() {
    const path = 'http://hp-api.herokuapp.com/api/characters/staff';

    return this.http.get<PersonasElement>(path);
  }
}
