import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions : Array<Question> = []
  specialResponses : Array<Response> = [];

  isEndNext(index: number){
    return !this.questions[index];
  }

  isFlashQuestionNext(index: number){
    if(this.questions[index].type == 'flash') return true
    return false
  }


  resetQuestions(){
    this.questions = [];
    console.warn('Questions have been reset');
  }


  async retrieveQuestion(index: number){
    const question = this.questions[index-1];
    return question
  }

  retrieveMaxPoints(index: number){
    let count: number = 0;
    this.questions[index-1].responses.map(
      response => {
        console.log(response)
        count += Number(response.points)
      }
    )
    return count + Number(this.specialResponses[index-1].points)
  }

  async retrieveSpecialResponse(index: number){
    const response = this.specialResponses[index-1];
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
      if(question.type == 'normal'){
        let questionJson = Question.fromJson(question);
        this.questions.push(questionJson)
        this.specialResponses.push(Response.fromJson(question.specialResponse))
      }
    })
  }


}
