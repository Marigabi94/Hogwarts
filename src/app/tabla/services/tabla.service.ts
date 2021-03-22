import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { PersonasElement } from '../../../app/tabla/tabla.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  configUrl = 'http://hp-api.herokuapp.com/api/characters';
  constructor(private http: HttpClient) {}

  public getAllEstudiantes(): Observable<PersonasElement[]> {
    return this.http.get<PersonasElement[]>(this.configUrl + '/students');
  }

  public getEstudiantesCasas(house): Observable<PersonasElement[]> {
    return this.http.get<PersonasElement[]>(this.configUrl + '/house/' + house);
  }

  public getAllProfesores(): Observable<PersonasElement[]> {
    return this.http.get<PersonasElement[]>(this.configUrl + '/staff');
  }
}
