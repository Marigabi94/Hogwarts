import { Component, OnInit } from '@angular/core';
import { CasasService } from './casas.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css'],
})
export class CasasComponent implements OnInit {
  casas: any;

  constructor(public service: CasasService) {}

  ngOnInit(): void {
    // this.service.getCasas().subscribe((data) => {
    //   this.casas = data;
    // });
  }
}
