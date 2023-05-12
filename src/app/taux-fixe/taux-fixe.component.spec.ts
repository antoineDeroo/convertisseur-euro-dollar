import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxFixeComponent } from './taux-fixe.component';

describe('TauxFixeComponent', () => {
  let component: TauxFixeComponent;
  let fixture: ComponentFixture<TauxFixeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TauxFixeComponent]
    });
    fixture = TestBed.createComponent(TauxFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
