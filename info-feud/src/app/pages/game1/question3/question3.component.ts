import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';

@Component({
  selector: 'app-question3',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question3Component {
  question = new Question({
    question: "Quel est la pire chose à propos d'être un programmeur?",
    responses: [
      new Response({ response: 'Debugger', points: '7' }),
      new Response({ response: 'Rester Assis', points: '6' }),
      new Response({ response: 'Corriger Syntaxe', points: '3' }),
      new Response({ response: 'Manque de Sommeil', points: '2' }),
      new Response({ response: 'Job Hunting', points: '1' }),
    ],
  });

  specialResponse = new Response({ response: 'Rend Fou', points: '5' });

  questionNumber = 3;

  nextRoute = '/game1-question4';

  maximumPoints = 24;
}
