import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyallpostComponent } from './technologyallpost.component';

describe('TechnologyallpostComponent', () => {
  let component: TechnologyallpostComponent;
  let fixture: ComponentFixture<TechnologyallpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyallpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyallpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
