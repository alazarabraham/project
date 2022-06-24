import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAnimationComponent } from './skills-animation.component';

describe('SkillsAnimationComponent', () => {
  let component: SkillsAnimationComponent;
  let fixture: ComponentFixture<SkillsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
