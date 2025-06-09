import { Component, Input, ViewChild, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';
import { animate, easeOut } from 'motion';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../button-component/button-component.component';

@Component({
  selector: 'app-timer',
  imports: [NgIf, ButtonComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  //Receive the time in seconds that will be used for the timer
  @Input() time: number = 0;

  @Output() ended = new EventEmitter<void>();

  isCounting: boolean = false;

  @ViewChild('timerRef') timerElementRef!: ElementRef;
  get countEl(): HTMLElement | null {
    return this.timerElementRef?.nativeElement ?? null;
  }

  constructor(private ngZone: NgZone) {}

  countDown(){
    if (this.isCounting) return;

    this.isCounting = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const el = this.countEl;
        if (!el) {
          console.warn('Timer element not available');
          this.isCounting = false;
          return;
        }

        this.playStartAudio();

        let counter = { value: this.time };
    
        animate(
          counter,
          { value: 0 },
          {
            duration: this.time,
            ease: easeOut,
            onUpdate: () => {
              el.textContent = Math.round(counter.value).toString();
            },
            onComplete: () => {
              this.playEndAudio();

              el.textContent = 'DONE';
              this.ended.emit();
              this.ngZone.run(() => {
                setTimeout(() => {
                  this.isCounting = false;
                }, 5000);
              });
            },
          }
        );
      }, 0);
    });
  }

  playStartAudio(){
    let audio = new Audio;
    audio.src = "assets/timerStart.wav";
    audio.load();
    audio.play();
  }

  playEndAudio(){
    let audio = new Audio;
    audio.src = "assets/timerDone.wav";
    audio.load();
    audio.play();
  }
}
