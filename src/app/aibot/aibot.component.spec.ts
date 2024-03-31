import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AibotComponent } from './aibot.component';

describe('AibotComponent', () => {
  let component: AibotComponent;
  let fixture: ComponentFixture<AibotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AibotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AibotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
