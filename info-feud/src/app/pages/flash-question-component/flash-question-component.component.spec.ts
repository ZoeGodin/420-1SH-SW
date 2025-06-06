import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashQuestionComponentComponent } from './flash-question-component.component';

describe('FlashQuestionComponentComponent', () => {
  let component: FlashQuestionComponentComponent;
  let fixture: ComponentFixture<FlashQuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashQuestionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
