import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';

@Component({
  selector: 'app-question2',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question2Game2Component {
  question = new Question({
    question: "Quel est la meilleur chose a propos d'être un programmeur?",
    responses: [
      new Response({ response: 'Créativité', points: '7' }),
      new Response({ response: 'Horaire Flexibles', points: '6' }),
      new Response({ response: 'Bon Salaire', points: '4' }),
      new Response({ response: 'Technologies', points: '2' }),
      new Response({ response: 'Autonomie', points: '2' }),
    ],
  });

  specialResponse = new Response({ response: "Pas d'Exercice", points: '5' });

  questionNumber = 2;

  nextRoute = '/game2-question3';

  maximumPoints = 26;
}
