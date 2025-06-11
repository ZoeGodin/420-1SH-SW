import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseScreenComponent } from './lose-screen.component';

describe('LoseScreenComponent', () => {
  let component: LoseScreenComponent;
  let fixture: ComponentFixture<LoseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoseScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
