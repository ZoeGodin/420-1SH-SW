import { Component } from '@angular/core';
import { QuestionDisplayComponent } from '../../../components/question-display/question-display.component';
import { Question } from '../../../models/question.model';
import { Response } from '../../../models/response.model';

@Component({
  selector: 'app-question4',
  imports: [QuestionDisplayComponent],
  templateUrl: '../../shared/shared-question-html.html',
})
export class Question4Component {
  question = new Question({
    question: "À part 'Hello World', quel la premiere phrase que vous mettez dans vos codes?",
    responses: [
      new Response({ response: 'Allo', points: '9' }),
      new Response({ response: 'Bonjour', points: '6' }),
      new Response({ response: 'Mon nom', points: '4' }),
      new Response({ response: 'Lorem Ipsum', points: '2' }),
      new Response({ response: 'Test', points: '2' }),
    ],
  });

  specialResponse = new Response({ response: 'Chicken Toes', points: '5' });

  questionNumber = 4;

  nextRoute = '/';

  maximumPoints = 28;
}
