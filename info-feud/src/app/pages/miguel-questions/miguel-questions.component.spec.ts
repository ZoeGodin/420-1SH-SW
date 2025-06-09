import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelQuestionsComponent } from './miguel-questions.component';

describe('MiguelQuestionsComponent', () => {
  let component: MiguelQuestionsComponent;
  let fixture: ComponentFixture<MiguelQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiguelQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiguelQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
