import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaravenclawComponent } from './tablaravenclaw.component';

describe('TablaravenclawComponent', () => {
  let component: TablaravenclawComponent;
  let fixture: ComponentFixture<TablaravenclawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaravenclawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaravenclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
