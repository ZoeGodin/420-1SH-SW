import { Component, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { Question } from '../../models/question.model';
import { TeamService } from '../../services/team.service';
import { QuestionsService } from '../../services/questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashBoxComponent } from '../../components/flash-box/flash-box.component';
import { TimerComponent } from '../../components/timer/timer.component';

@Component({
  selector: 'app-flash-question-component',
  imports: [CommonModule, FlashBoxComponent, ButtonComponent, CounterComponent, TimerComponent],
  templateUrl: './flash-question-component.component.html',
  styleUrl: './flash-question-component.component.css'
})
export class FlashQuestionComponentComponent {
  router: Router = new Router;
  questions: Array<Question> = [];
  pointsToWin: number = 0;
  pointsWon: number = 0;
  revealedCount = 0;
  totalAnswers: number = 0;
  rounds: number = 0;

  constructor(
    private route: ActivatedRoute,
    public teamService: TeamService,
    public questionService: QuestionsService
  ){}

    ngOnInit() {
    this.route.params.subscribe(async params => {
      await this.assigningQuestions(params);
    })
  }

  async assigningQuestions(params: any){
    this.pointsToWin = await this.questionService.retrieveFlashPoints();
    this.questions = await this.questionService.retrieveFlashQuestions();
    this.totalAnswers = (this.questions.length) * 2;
  }

  onBoxRevealed(points: number) {
    this.revealedCount++;
    this.pointsWon += points;
  }

  counterFinished(){
    this.rounds++;
  }

  seeResults(){
    console.log('see results')
    if(this.pointsWon < this.pointsToWin){
      //go to lose screen
    }else{
      //go to winning screen
    }
  }
}
