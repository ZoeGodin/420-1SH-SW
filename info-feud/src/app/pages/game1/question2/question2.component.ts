import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';

@Component({
  selector: 'app-question2',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question2Component {
  question = new Question({
    question: 'Quel est le pire type de job en informatique?',
    responses: [
      new Response({ response: 'Soutien Technique', points: '10' }),
      new Response({ response: 'Service Client', points: '8' }),
      new Response({ response: 'Web Developper', points: '3' }),
      new Response({ response: 'En présentiel', points: '2' }),
      new Response({ response: 'Enseignant', points: '1' }),
    ],
  });

  specialResponse = new Response({ response: 'Concierge', points: '5' });

  questionNumber = 2;

  nextRoute = '/game1-question3';

  maximumPoints = 29;
}
