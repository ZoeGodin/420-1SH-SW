import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions : Array<Question> = []
  specialResponses : Array<Response> = [];

  calculateMaxuimumPoints(){}

  resetQuestions(){
    this.questions = [];
    console.warn('Questions have been reset');
  }


  retrieveQuestion(index: number){
    console.log('-------------------');
    const question = this.questions[index-1];
    console.log(':', question);   
    return question
  }

  retrieveSpecialResponse(index: number){
    console.log('-------------------');
    const response = this.specialResponses[index-1];
    console.log(':', response);   
    return response
  }


  async retrieveQuestionsFromJson(filename: string){
    this.resetQuestions()

    let object: any;

    try{
      object = await import(`../../answers/${filename}.json`);
    }
    catch(ex){
      console.warn('ERROR WHEN IMPORTING FILE (probably due to bad filename): ', ex);
      return;
    }

    object.default.map( (question : any) => {
      let questionJson = Question.fromJson(question);
      this.questions.push(questionJson)
      this.specialResponses.push(Response.fromJson(question.specialResponse))
    })
  }
}
