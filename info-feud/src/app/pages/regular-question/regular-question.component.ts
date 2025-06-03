import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { QuestionDisplayComponent } from '../../components/question-display/question-display.component';
import { TeamService } from '../../services/team.service';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-regular-question',
  imports: [QuestionDisplayComponent, NgIf],
  templateUrl: '../shared/shared-question-html.html',
})
export class RegularQuestionComponent implements OnInit{
  router: Router = new Router;

  questionNumber: number = 0;
  specialResponse: any;
  question: any;
  isNormalQuestion: boolean | undefined = undefined;
  isFlashQuestion: boolean | undefined = undefined;
  maximumPoints: number = 0
  nextRoute: string = '/';
  nextId: number = 0;
  isFlashNext: boolean = false;
  isEndNext: boolean = false;

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
    this.specialResponse = await this.questionService.retrieveSpecialResponse(this.questionNumber);

    this.maximumPoints = this.questionService.retrieveMaxPoints(this.questionNumber);
  
    this.isEndNext = this.questionService.isEndNext(params.id)
    if(!this.isEndNext){1/0
      this.isFlashNext = this.questionService.isFlashQuestionNext(params.id)
    }
    this.nextRoute = params.game;
    this.nextId = Number(params.id) + 1;

    this.isNormalQuestion = true;
  }
}
