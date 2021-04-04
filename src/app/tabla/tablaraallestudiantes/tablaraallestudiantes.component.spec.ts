import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaraallestudiantesComponent } from './tablaraallestudiantes.component';

describe('TablaraallestudiantesComponent', () => {
  let component: TablaraallestudiantesComponent;
  let fixture: ComponentFixture<TablaraallestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaraallestudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaraallestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
