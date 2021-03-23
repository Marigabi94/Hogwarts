import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnInit,
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
export class TablaComponent implements AfterViewInit, OnInit {
  house: string;
  getUse: number;
  datosCargados = [];
  displayedColumns: string[] = ['name', 'patronus', 'image'];
  dataSource = new MatTableDataSource<PersonasElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public tablaService: TablaService,
    public changeDetectorRefs: ChangeDetectorRef
  ) {}

  // getEstudiantesCasas(house: any) {
  //   this.tablaService
  //     .getEstudiantesCasas(house)
  //     .subscribe((PersonasElement: any) => {
  //       this.sub(PersonasElement);
  //     });
  //   this.changeDetectorRefs.detectChanges();
  // }

  // switch (casa) {
  //     case 1:
  //       this.getEstudiantesCasas((this.house = 'gryffindor'));
  //       break;
  //     case 2:
  //       this.getEstudiantesCasas((this.house = 'slytherin'));
  //       break;
  //     case 3:
  //       this.getEstudiantesCasas((this.house = 'hufflepuff'));
  //       break;
  //     case 4:
  //       this.getEstudiantesCasas((this.house = 'ravenclaw'));
  //       break;
  //   }

  // TODO: funcion a realizar dentro del subcribe
  sub(PersonasElement: any) {
    this.dataSource.data = [];
    this.dataSource = new MatTableDataSource(PersonasElement);
    this.dataSource.data = PersonasElement;

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.data);
  }

  SeleccionTabla(getUse) {
    switch (getUse) {
      case 1:
        this.tablaService
          .getAllEstudiantes()
          .subscribe((PersonasElement: any) => {
            this.sub(PersonasElement);
          });
        this.changeDetectorRefs.detectChanges();
        break;
      case 2:
        this.tablaService
          .getAllProfesores()
          .subscribe((PersonasElement: any) => {
            this.sub(PersonasElement);
          });

        break;
    }
  }

  ngOnInit() {
    this.SeleccionTabla(1);
  }

  ngAfterViewInit() {
    this.SeleccionTabla(this.getUse);
  }
}
