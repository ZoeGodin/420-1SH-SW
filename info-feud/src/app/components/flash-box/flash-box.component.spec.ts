import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashBoxComponent } from './flash-box.component';

describe('FlashBoxComponent', () => {
  let component: FlashBoxComponent;
  let fixture: ComponentFixture<FlashBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
