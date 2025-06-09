import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../../components/counter/counter.component';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import { MotionBoxComponent } from '../../components/motion-box/motion-box.component';
import { Question } from '../../models/question.model';
import { TeamService } from '../../services/team.service';
import { Response } from '../../models/response.model';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miguel-questions',
  imports: [CommonModule, MotionBoxComponent, ButtonComponent, CounterComponent, MatButtonModule],
  templateUrl: './miguel-questions.component.html',
  styleUrl: './miguel-questions.component.css'
})
export class MiguelQuestionsComponent {
  //Recieve the question specifications
  @Input() questionNumber = 1;
  @Input() question!: Question;
  @Input() specialResponse!: Response;
  @Input() maximumPoints = 0;
  @Input() nextRoute: string = '/';
  @Input() id: number = 0;
  @Input() isFlashNext: boolean = false;
  @Input() isEndNext: boolean = false;

  @ViewChildren(MotionBoxComponent) boxes!: QueryList<MotionBoxComponent>;

  router: Router = new Router
  readyToRevealDisabled = true;
  revealedCount = 0;
  totalAnswers = 0;
  nextId: number = 0;

  constructor(
    private route: ActivatedRoute,
    public teamService: TeamService,
    public questionService: QuestionsService
  ){}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      await this.assiningVariables(params);
    })
  }


  async assiningVariables(params: any){
    this.questionNumber = params.id;
    if(params.id == 1){
      this.teamService.resetPoints();
      await this.questionService.retrieveQuestionsFromJson(params.game);
    }

    this.question = await this.questionService.retrieveQuestion(this.questionNumber);

    this.maximumPoints = this.questionService.retrieveMaxPoints(this.questionNumber);
  
    this.isEndNext = this.questionService.isEndNext(params.id)
    if(!this.isEndNext){
      this.isFlashNext = this.questionService.isFlashQuestionNext(params.id)
    }
    this.nextRoute = params.game;
    this.nextId = Number(params.id) + 1;

  }

  nextQuestion(){
    if(this.isEndNext){
      this.router.navigateByUrl('/');
    }else{
      this.router.navigate(['/migame', this.nextRoute, this.nextId]);
    }
  }
  
  forceRevealAll() {
    this.boxes.forEach(box => box.forceRevealWithoutEmit());
    this.revealedCount = this.totalAnswers;
  }
}
