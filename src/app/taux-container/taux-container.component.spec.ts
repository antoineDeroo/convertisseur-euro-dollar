import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxContainerComponent } from './taux-container.component';

describe('TauxContainerComponent', () => {
  let component: TauxContainerComponent;
  let fixture: ComponentFixture<TauxContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TauxContainerComponent]
    });
    fixture = TestBed.createComponent(TauxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
