import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';
import { TeamService } from '../../../services/team.service';
import { QuestionsService } from '../../../services/questions.service';

@Component({
  selector: 'app-question2',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question2DemoComponent {
  // specialResponse: Response | null = null;
  questionNumber = 1;
  nextRoute = '/';
  maximumPoints: number = 0;

  specialResponse: any;
  question: any;
}
