import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Longform1Component } from './longform1.component';

describe('Longform1Component', () => {
  let component: Longform1Component;
  let fixture: ComponentFixture<Longform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Longform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Longform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
