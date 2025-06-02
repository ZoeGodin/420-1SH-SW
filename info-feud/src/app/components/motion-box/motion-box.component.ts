import { Component, ElementRef, Input, ViewChild, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, easeOut } from 'motion';

@Component({
  selector: 'app-motion-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motion-box.component.html',
  styleUrls: ['./motion-box.component.css']
})
export class MotionBoxComponent {
  //These are placeholder whilst the component waits for the real answer and points
  @Input() answer: string = 'PLACEHOLDER' 
  @Input() points: string = 'POINTPLACEHOLDER'
  //This receives a delay number. When placed in the context of the html where the boxes are in a for loop, this makes sure they animate themselves one after the other so it looks good
  @Input() delayIndex: number = 0;
  //This emits wheter the answer of the box has been revealed or no. It also has the possibility to return a number in the case where the answer has been found
  @Output() revealed = new EventEmitter<number>();


  @ViewChild('boxContainer') boxContainerRef!: ElementRef;
  placeholder = '--------';
  pointsPlaceholder = '--';

  isRevealed = false;

  //These assign a value to the answer and point element in the HTML
  @ViewChild('answerText', {static: false}) answerTextRef!: ElementRef;
  @ViewChild('pointsText', {static: false}) pointsTextRef!: ElementRef;

  //This function reveals the answer AND returns the number of points
  revealAnswer() {
    if (this.isRevealed) return;
    this.isRevealed = true;
    this.revealed.emit(Number(this.points));
    this.animateReveal();
  }

  //This function also reveals the answer but does not send the number of points (Happens when the button 'Show Answers' is clicked, meaning the teams did not find all answers)
  forceRevealWithoutEmit() {
    if (this.isRevealed) return;
    this.isRevealed = true;
    this.animateReveal();
  }

  
  ngAfterViewInit() {
    const delay = this.delayIndex * 200;
    animate(this.boxContainerRef.nativeElement, {
      opacity: [0, 1],
      y: [80, 0],
      scale: [0.95, 1],
    }, {
      duration: 0.6,
      delay: delay / 1000,
      ease: easeOut,
    });
  }

  //Function to animate the answer reveal. In a timelapse of 0.5 seconds, we make the points/answer appear (opacity from 0 to 1) from the bottom (we start at x -10 to get to their position 0) with a small scale movement (0.9 of their size to their real size 1). The points also have a slight delay so the answer shows before.
  private animateReveal() {
    setTimeout(() => {
      animate(this.answerTextRef.nativeElement, {
        opacity: [0, 1],
        x: [-10, 0],
        scale: [0.9, 1]
      }, {
        duration: 0.5,
        ease: 'easeOut'
      });

      animate(this.pointsTextRef.nativeElement, {
        opacity: [0, 1],
        y: [-5, 0],
        scale: [0.8, 1]
      }, {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.1
      });
    });
  }

}
