import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceallpostComponent } from './scienceallpost.component';

describe('ScienceallpostComponent', () => {
  let component: ScienceallpostComponent;
  let fixture: ComponentFixture<ScienceallpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceallpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceallpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
