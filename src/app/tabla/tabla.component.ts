import {
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablaService } from './services/tabla.service';

export interface PersonasElement {
  house: string;
  image: string;
  name: string;
  patronus: string;
  dateOfBirth: string;
}

const ELEMENT_DATA: PersonasElement[] = [];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablaComponent implements OnInit, AfterViewInit {
  house: string;
  getUse: number;
  sn = document.getElementById('snow');

  datosCargados = [];
  displayedColumns: string[] = ['name', 'patronus', 'image'];
  dataSource = new MatTableDataSource<PersonasElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public tablaService: TablaService,
    public changeDetectorRefs: ChangeDetectorRef
  ) {}

  // TODO: funcion a realizar dentro del subcribe
  sub(PersonasElement: any) {
    this.dataSource.data = [];
    this.dataSource = new MatTableDataSource(PersonasElement);
    this.dataSource.data = PersonasElement;

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.data);
  }
  getAllEstudiantes() {
    this.tablaService.getAllEstudiantes().subscribe((PersonasElement: any) => {
      this.sub(PersonasElement);
    });
    this.changeDetectorRefs.detectChanges();
  }
  getAllProfesores() {
    this.tablaService.getAllProfesores().subscribe((PersonasElement: any) => {
      this.sub(PersonasElement);
    });
    this.changeDetectorRefs.detectChanges();
  }

  getEstudiantesCasas(house: any) {
    this.tablaService
      .getEstudiantesCasas(house)
      .subscribe((PersonasElement: any) => {
        this.sub(PersonasElement);
      });
  }
  SeleccionTabla(getUse) {
    switch (getUse) {
      case 1:
        this.Snow(2);
        this.getAllEstudiantes();
        break;
      case 2:
        this.Snow(2);
        this.getAllEstudiantes();
        break;
      case 3:
        this.getEstudiantesCasas('gryffindor');
        break;
      case 4:
        this.getEstudiantesCasas('slytherin');
        break;
      case 5:
        this.getEstudiantesCasas('hufflepuff');
        break;
      case 6:
        this.getEstudiantesCasas('ravenclaw');
        break;
    }
  }
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
  ngOnInit() {}

  ngAfterViewInit() {
    this.SeleccionTabla(this.getUse);
  }
}
