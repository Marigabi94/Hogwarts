import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablahufflepuffComponent } from './tablahufflepuff.component';

describe('TablahufflepuffComponent', () => {
  let component: TablahufflepuffComponent;
  let fixture: ComponentFixture<TablahufflepuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablahufflepuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablahufflepuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
