import {
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablaService } from './services/tabla.service';

export interface PersonasElement {
  house: string;
  image: string;
  name: string;
  patronus: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablaComponent implements OnInit {
  sn = document.getElementById('snow');
  displayedColumns: string[] = ['name', 'patronus', 'image'];
  dataSourceProfesores: MatTableDataSource<PersonasElement>;
  dataSourceEstudiantes: MatTableDataSource<PersonasElement>;
  dataSourceGryffindor: MatTableDataSource<PersonasElement>;
  dataSourceSlytherin: MatTableDataSource<PersonasElement>;
  dataSourceHufflepuff: MatTableDataSource<PersonasElement>;
  dataSourceRavenclaw: MatTableDataSource<PersonasElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // TODO: CONSTRUCTOR
  constructor(
    public tablaService: TablaService,
    public changeDetectorRefs: ChangeDetectorRef,
    public fb: FormBuilder
  ) {}

  // TODO: GET ESTUDIANTES
  getAllEstudiantes() {
    this.tablaService.getAllEstudiantes().subscribe((PersonasElement: any) => {
      this.dataSourceEstudiantes = new MatTableDataSource(PersonasElement);
      this.dataSourceEstudiantes.data = PersonasElement;
      this.dataSourceEstudiantes.paginator = this.paginator;
      this.dataSourceEstudiantes.sort = this.sort;
    });
    this.changeDetectorRefs.detectChanges();
  }

  // TODO: GET PROFESORES
  getAllProfesores() {
    this.tablaService.getAllProfesores().subscribe((PersonasElement: any) => {
      this.dataSourceProfesores = new MatTableDataSource(PersonasElement);
      this.dataSourceProfesores.data = PersonasElement;
      this.dataSourceProfesores.sort = this.sort;
      this.dataSourceProfesores.paginator = this.paginator;
    });
    this.changeDetectorRefs.detectChanges();
  }

  // TODO: GET ESTUDIANTES CASAS
  getEstudiantesCasas(house: any) {
    this.tablaService
      .getEstudiantesCasas(house)
      .subscribe((PersonasElement: any) => {
        switch (house) {
          case 'gryffindor':
            this.dataSourceGryffindor = new MatTableDataSource(PersonasElement);
            this.dataSourceGryffindor.data = PersonasElement;
            this.dataSourceGryffindor.paginator = this.paginator;
            this.dataSourceGryffindor.sort = this.sort;
            break;
          case 'hufflepuff':
            this.dataSourceHufflepuff = new MatTableDataSource(PersonasElement);
            this.dataSourceHufflepuff.data = PersonasElement;
            this.dataSourceHufflepuff.paginator = this.paginator;
            this.dataSourceHufflepuff.sort = this.sort;
            break;
          case 'ravenclaw':
            this.dataSourceRavenclaw = new MatTableDataSource(PersonasElement);
            this.dataSourceRavenclaw.data = PersonasElement;
            this.dataSourceRavenclaw.paginator = this.paginator;
            this.dataSourceRavenclaw.sort = this.sort;
            break;
          case 'slytherin':
            this.dataSourceSlytherin = new MatTableDataSource(PersonasElement);
            this.dataSourceSlytherin.data = PersonasElement;
            this.dataSourceSlytherin.paginator = this.paginator;
            this.dataSourceSlytherin.sort = this.sort;
            break;
        }
      });
    this.changeDetectorRefs.detectChanges();
  }

  // TODO: ACTIVAR DESACTIVAR EFECTO DE NIEVE
  Snow(opcionSnow: number) {
    switch (opcionSnow) {
      case 1:
        this.sn.style.display = 'flex';
        break;
      case 2:
        this.sn.style.display = 'none';
        break;
    }
  }

  // TODO: ngOnInit
  ngOnInit() {
    this.getAllProfesores();
  }
}
