import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEurComponent } from './input-eur.component';

describe('InputEurComponent', () => {
  let component: InputEurComponent;
  let fixture: ComponentFixture<InputEurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputEurComponent]
    });
    fixture = TestBed.createComponent(InputEurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
