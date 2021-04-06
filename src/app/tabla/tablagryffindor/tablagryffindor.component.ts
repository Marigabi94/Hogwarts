import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TablaComponent } from '../tabla.component';

@Component({
  selector: 'app-tablagryffindor',
  templateUrl: './tablagryffindor.component.html',
  styleUrls: ['./tablagryffindor.component.css', '../tabla.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TablagryffindorComponent extends TablaComponent implements OnInit {
  ngOnInit(): void {
    this.getEstudiantesCasas('gryffindor');
  }
}
