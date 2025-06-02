import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';
import { TeamService } from '../../../team.service';

@Component({
  selector: 'app-question1',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question1Game2Component {
  question = new Question({
    question: 'Quel est le skill le plus important pour un programmeur?',
    responses: [
      new Response({ response: 'Logique', points: '10' }),
      new Response({ response: 'Patience', points: '5' }),
      new Response({ response: 'Curiosité', points: '5' }),
      new Response({ response: 'Créativité', points: '3' }),
      new Response({ response: 'Improvisation', points: '2' }),
    ],
  });

  specialResponse = new Response({ response: 'Chat GPT', points: '5' });

  questionNumber = 1;

  nextRoute = '/game2-question2';

  maximumPoints = 30;

  constructor(public teamService: TeamService) {}

  ngOnInit() {
    this.teamService.resetPoints();
  }
}
