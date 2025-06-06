import { Component, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, easeOut } from 'motion';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-flash-box',
  imports: [CommonModule],
  templateUrl: './flash-box.component.html',
  styleUrl: './flash-box.component.css'
})
export class FlashBoxComponent {
  @Input() flashQuestionId: number = 0;

  //This receives a delay number. When placed in the context of the html where the boxes are in a for loop, this makes sure they animate themselves one after the other so it looks good
  @Input() delayIndex: number = 0;
  //This emits wheter the answer of the box has been revealed or no. It also has the possibility to return a number in the case where the answer has been found
  @Output() revealed = new EventEmitter<number>();


  @ViewChild('boxLeftContainer') boxLeftContainerRef!: ElementRef;
  @ViewChild('boxRightContainer') boxRightContainerRef!: ElementRef;
  pointsPlaceholder = '--';

  isLeftRevealed = false;
  isRightRevealed = false;

  leftPoints: string = '0';
  rightPoints: string = '0';

  leftAnswer: string = 'left placeholder';
  rightAnswer: string = 'right placeholder';

  //These assign a value to the answer and point element in the HTML
  @ViewChild('answerLeftText', {static: false}) answerLeftTextRef!: ElementRef;
  @ViewChild('pointsLeftText', {static: false}) pointsLeftTextRef!: ElementRef;
  @ViewChild('answerRightText', {static: false}) answerRightTextRef!: ElementRef;
  @ViewChild('pointsRightText', {static: false}) pointsRightTextRef!: ElementRef;

  @ViewChild('answerLeftSpan', {static: false}) answerLeftSpanRef!: ElementRef;
  @ViewChild('answerRightSpan', {static: false}) answerRightSpanRef!: ElementRef;


  constructor(public questionService: QuestionsService){}

  //This function reveals the answer AND returns the number of points
  revealAnswer(side: 'left' | 'right') {
    if(side === 'left'){
      if (this.isLeftRevealed) return;
      this.leftAnswer = this.answerLeftTextRef.nativeElement.value;

      this.validatePoints('left');
      this.isLeftRevealed = true;
      this.revealed.emit(Number(this.leftPoints));
      this.animateReveal(3, 'left');
    }if (side == 'right') {
      if (this.isRightRevealed) return;
      this.rightAnswer = this.answerRightTextRef.nativeElement.value;

      this.validatePoints('right');
      this.isRightRevealed = true;
      this.revealed.emit(Number(this.rightPoints));
      this.animateReveal(3, 'right');
    }
    if(side != 'left' && side != 'right'){
      console.warn('Incorrect side given as parameter: ', side);
    }
  }

  
  ngAfterViewInit() {
    const delay = this.delayIndex * 200;
    animate(this.boxLeftContainerRef.nativeElement, {
      opacity: [0, 1],
      x: [-500, 0],
      scale: [0.50, 1],
    }, {
      duration: 0.2,
      delay: delay / 1000,
      ease: easeOut,
    });
    animate(this.boxRightContainerRef.nativeElement, {
      opacity: [0, 1],
      x: [500, 0],
      scale: [0.50, 1],
    }, {
      duration: 0.2,
      delay: delay / 1000,
      ease: easeOut,
    });
  }

  //Function to animate the answer reveal. In a timelapse of 0.5 seconds, we make the points/answer appear (opacity from 0 to 1) from the bottom (we start at x -10 to get to their position 0) with a small scale movement (0.9 of their size to their real size 1). The points also have a slight delay so the answer shows before.
  private animateReveal(retries = 3, side: string) {
    setTimeout(() => {
      let pointsEl: any;
      let pointsRef: any;

      let answerEl: any;
      let answerRef: any;

      if(side === 'left'){
        pointsEl = this.pointsLeftTextRef?.nativeElement;
        pointsRef = this.pointsLeftTextRef.nativeElement;

        answerEl = this.answerLeftSpanRef?.nativeElement;
        answerRef = this.answerLeftSpanRef.nativeElement;
      }
      if (side === 'right') {
        pointsEl = this.pointsRightTextRef?.nativeElement;
        pointsRef = this.pointsRightTextRef.nativeElement;

        answerEl = this.answerRightSpanRef?.nativeElement;
        answerRef = this.answerRightSpanRef.nativeElement;
      }
      if(side != 'left' && side != 'right'){
        console.warn('Incorrect side given as animation parameter: ', side);
        return;
      }

      if (!pointsEl || !answerEl) {
        if (retries > 0) {
          setTimeout(() => this.animateReveal(retries - 1, side), 100);
          console.warn('Answer or points element not yet available, trying again');
        }
        return;
      }

      animate(pointsRef, {
        opacity: [0, 1],
        y: [-5, 0],
        scale: [0.8, 1]
      }, {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.1
      });

      animate(answerRef, {
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

  validatePoints(side: string){
    if(side === 'left'){
      this.leftPoints = this.questionService.retrieveFlashQuestionAnswerPoints(this.flashQuestionId, this.leftAnswer)
    }if (side == 'right') {
      this.rightPoints = this.questionService.retrieveFlashQuestionAnswerPoints(this.flashQuestionId, this.rightAnswer)
    }
  }

}
