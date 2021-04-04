import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablagryffindorComponent } from './tablagryffindor.component';

describe('TablagryffindorComponent', () => {
  let component: TablagryffindorComponent;
  let fixture: ComponentFixture<TablagryffindorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablagryffindorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablagryffindorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
