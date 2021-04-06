import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TablaComponent } from '../tabla.component';

@Component({
  selector: 'app-tablahufflepuff',
  templateUrl: './tablahufflepuff.component.html',
  styleUrls: ['./tablahufflepuff.component.css', '../tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablahufflepuffComponent extends TablaComponent implements OnInit {
  ngOnInit(): void {
    this.getEstudiantesCasas('hufflepuff');
  }
}
