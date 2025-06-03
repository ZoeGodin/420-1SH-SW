import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularQuestionComponent } from './regular-question.component';

describe('RegularQuestionComponent', () => {
  let component: RegularQuestionComponent;
  let fixture: ComponentFixture<RegularQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
