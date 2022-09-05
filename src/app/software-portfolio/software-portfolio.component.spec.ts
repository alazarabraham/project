import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePortfolioComponent } from './software-portfolio.component';

describe('SoftwarePortfolioComponent', () => {
  let component: SoftwarePortfolioComponent;
  let fixture: ComponentFixture<SoftwarePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwarePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwarePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
