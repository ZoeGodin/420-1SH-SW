import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionBoxComponent } from './motion-box.component';

describe('MotionBoxComponent', () => {
  let component: MotionBoxComponent;
  let fixture: ComponentFixture<MotionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
