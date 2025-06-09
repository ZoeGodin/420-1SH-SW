import { Component, Input, ViewChildren, QueryList, OnInit, ElementRef, ViewChild, EventEmitter, Output, HostListener, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { Question } from '../../models/question.model';
import { TeamService } from '../../services/team.service';
import { QuestionsService } from '../../services/questions.service';
import { Response } from '../../models/response.model';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, easeOut } from 'motion';
import { FlashBoxComponent } from '../../components/flash-box/flash-box.component';

@Component({
  selector: 'app-flash-question-component',
  imports: [CommonModule, FlashBoxComponent],
  templateUrl: './flash-question-component.component.html',
  styleUrl: './flash-question-component.component.css'
})
export class FlashQuestionComponentComponent {
  router: Router = new Router;
  questions: Array<Question> = [];

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
    this.questions = await this.questionService.retrieveFlashQuestions();
    console.log('-----------------------------')
    console.log(this.questions);
  }


}
