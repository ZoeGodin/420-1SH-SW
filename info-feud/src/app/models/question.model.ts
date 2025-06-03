import { Response } from "./response.model"

export class Question{
    readonly question: string
    readonly responses: Response[]

    constructor(value:{
        question: string,
        responses: Response[],
    }){
        this.question = value.question
        this.responses = value.responses
    }

    static fromJson ( value: {
        question: string,
        responses: { points: string; response: string; }[]
    }): Question {
        const jsonResponses: Response[] = value.responses.map( response => Response.fromJson({response: response.response, points: response.points}))
        return new Question({
            question: value.question,
            responses: jsonResponses
        })
    }
}