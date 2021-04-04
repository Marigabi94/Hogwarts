import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaslytherinComponent } from './tablaslytherin.component';

describe('TablaslytherinComponent', () => {
  let component: TablaslytherinComponent;
  let fixture: ComponentFixture<TablaslytherinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaslytherinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaslytherinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
