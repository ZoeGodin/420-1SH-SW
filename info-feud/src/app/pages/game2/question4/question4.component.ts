import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';

@Component({
  selector: 'app-question4',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question4Game2Component {
  question = new Question({
    question: 'Nommer une chose que vous ne comprenez pas en informatique, peut-importe le nombre de fois que on vous le répète.',
    responses: [
      new Response({ response: 'Les Pointeurs', points: '9' }),
      new Response({ response: 'Gestion Mémoire', points: '6' }),
      new Response({ response: "L'Assembleur", points: '4' }),
      new Response({ response: 'Listes Chainées', points: '3' }),
      new Response({ response: 'VM Perd IP', points: '2' }),
    ],
  });

  specialResponse = new Response({ response: "James", points: '5' });

  questionNumber = 4;

  nextRoute = '/';

  maximumPoints = 29;
}
