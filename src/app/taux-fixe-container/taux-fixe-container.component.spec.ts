import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxFixeContainerComponent } from './taux-fixe-container.component';

describe('TauxFixeContainerComponent', () => {
  let component: TauxFixeContainerComponent;
  let fixture: ComponentFixture<TauxFixeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TauxFixeContainerComponent]
    });
    fixture = TestBed.createComponent(TauxFixeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
