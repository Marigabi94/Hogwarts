import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TablaService } from './services/tabla.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'patronus',
    // 'age',
    'image',
  ];
  dataSource = new MatTableDataSource<PersonasElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public tablaService: TablaService) {}

  public getAllEstudiantes() {
    this.tablaService.getAllEstudiantes().subscribe((todos) => {
      console.log(todos);
    });
  }

  public getAllEstudiantesCasas() {
    this.tablaService.getAllEstudiantesCasas().subscribe((todos) => {
      console.log(todos);
    });
  }

  public getAllProfesores() {
    this.tablaService.getAllProfesores().subscribe((todos) => {
      console.log(todos);
    });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PersonasElement {
  name: string;
  patronus: string;
  // age: string;
  image: string;
  dateOfBirth: string;
}

const ELEMENT_DATA: PersonasElement[] = [];
