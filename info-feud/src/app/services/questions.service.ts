import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions : Array<Question> = [];
  specialResponses : Array<Response> = [];

  flashQuestions : Array<Question> = [];

  isEndNext(index: number){
    return !this.questions[index];
  }

  isFlashQuestionNext(index: number){
    if(this.questions[index].type == 'flash') return true
    return false
  }

  // Returns 60% of the total points. This will be the number of points a team needs to win the flash round.
  async retrieveFlashPoints(){
    let totalPoints: number = 0;
    this.flashQuestions.forEach(question => {
      question.responses.forEach(answer => {
        totalPoints += Number(answer.points);
      })
    });
    return Math.round(totalPoints * 0.6);
  }

  retrieveFlashQuestionAnswerPoints(index: number, playerAnswer: string){
    let answers = this.flashQuestions[index].responses
    let points: string = '0';
    answers.forEach(answer => {
      if(answer.response.toLowerCase() === playerAnswer.toLowerCase()){
        points = answer.points;
        return;
      }
    });
    return points;
  }

  resetQuestions(){
    this.questions = [];
    console.warn('Questions have been reset');
  }


  async retrieveQuestion(index: number){
    const question = this.questions[index-1];
    return question
  }

  async retrieveFlashQuestions(){
    return this.flashQuestions
  }

  retrieveMaxPoints(index: number){
    let count: number = 0;
    this.questions[index-1].responses.map(
      response => {
        count += Number(response.points)
      }
    )
    if(this.specialResponses.length != 0){
      count += Number(this.specialResponses[index-1].points)
    }
    return count
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
      let questionJson = Question.fromJson(question);
      this.questions.push(questionJson)
      if(question.specialResponse){
        this.specialResponses.push(Response.fromJson(question.specialResponse))
      }

      if(questionJson.type == 'flash'){
        this.flashQuestions.push(questionJson)
      }
    })
  }


}
