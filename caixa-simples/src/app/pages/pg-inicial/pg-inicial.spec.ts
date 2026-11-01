import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInicial } from './pg-inicial';

describe('PgInicial', () => {
  let component: PgInicial;
  let fixture: ComponentFixture<PgInicial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgInicial],
    }).compileComponents();

    fixture = TestBed.createComponent(PgInicial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
