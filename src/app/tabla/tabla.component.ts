import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
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
  availableSizes: Array<string>;
}

const ELEMENT_DATA: PersonasElement[] = [];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablaComponent implements AfterViewInit {
  getUse: number;
  house: string;
  displayedColumns: string[] = ['name', 'patronus', 'image'];
  dataSource = new MatTableDataSource<PersonasElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public tablaService: TablaService,
    public changeDetectorRefs: ChangeDetectorRef
  ) {}

  getAllEstudiantes() {
    this.tablaService.getAllEstudiantes().subscribe((PersonasElement: any) => {
      this.sub(PersonasElement);
    });
  }

  getEstudiantesCasas(house: any): void {
    this.tablaService
      .getEstudiantesCasas(house)
      .subscribe((PersonasElement: any) => {
        this.sub(PersonasElement);
      });
  }

  getAllProfesores() {
    this.tablaService.getAllProfesores().subscribe((PersonasElement: any) => {
      this.sub(PersonasElement);
    });
  }

  sub(PersonasElement: any) {
    this.dataSource = new MatTableDataSource(PersonasElement);
    this.dataSource = PersonasElement;
    this.changeDetectorRefs.detectChanges();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  SeleccionTabla() {
    switch (this.getUse) {
      case 1:
        this.getAllEstudiantes();

        break;
      case 2:
        this.getAllProfesores();

        break;
    }
  }

  ngOnInit() {
    this.SeleccionTabla();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
