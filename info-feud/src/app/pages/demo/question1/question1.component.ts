import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';
import { TeamService } from '../../../services/team.service';
import { QuestionsService } from '../../../services/questions.service';

@Component({
  selector: 'app-question1',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question1DemoComponent {
  questionNumber = 1;
  nextRoute = '/demo-question2';
  maximumPoints: number = 0;

  specialResponse: any;
  question: any;

  constructor(public teamService: TeamService, public questionService: QuestionsService) {}

  async ngOnInit() {
    this.teamService.resetPoints();
    this.questionService.retrieveQuestionsFromJson('demo')
      .then(() => {
        this.question = this.questionService.retrieveQuestion(this.questionNumber);
        this.specialResponse = this.questionService.retrieveSpecialResponse(this.questionNumber);
      });
  }
}