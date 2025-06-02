import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-question1',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question1Component {

  question = new Question({
    question: 'Nommer votre langage de programation préféré.',
    responses: [
      new Response({ response: 'C++', points: '16' }),
      new Response({ response: 'Javascript', points: '9' }),
      new Response({ response: 'C#', points: '3' }),
      new Response({ response: 'Ruby', points: '2' }),
      new Response({ response: 'HTML', points: '1' }),
    ],
  });

  specialResponse = new Response({ response: 'Debian', points: '5' });

  questionNumber = 1;

  nextRoute = '/game1-question2';

  maximumPoints = 36;

  constructor(public teamService: TeamService) {}

  ngOnInit() {
    this.teamService.resetPoints();
  }
}
