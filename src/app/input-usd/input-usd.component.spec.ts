import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsdComponent } from './input-usd.component';

describe('InputUsdComponent', () => {
  let component: InputUsdComponent;
  let fixture: ComponentFixture<InputUsdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputUsdComponent]
    });
    fixture = TestBed.createComponent(InputUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
