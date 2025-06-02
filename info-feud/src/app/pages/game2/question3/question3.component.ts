import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';

@Component({
  selector: 'app-question3',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question3Game2Component {
  question = new Question({
    question: "Qu'est ce qui vous fait le plus peur en codant?",
    responses: [
      new Response({ response: 'Mauvaise Syntaxe', points: '8' }),
      new Response({ response: 'Bugs', points: '5' }),
      new Response({ response: "Crash", points: '5' }),
      new Response({ response: 'Perte de Données', points: '3' }),
      new Response({ response: 'Code 18', points: '2' }),
    ],
  });

  specialResponse = new Response({ response: "James & Mathieu", points: '5' });

  questionNumber = 4;

  nextRoute = '/game2-question4';

  maximumPoints = 28;
}
