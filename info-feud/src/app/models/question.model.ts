import { Response } from "./response.model"

export class Question{
    readonly question: string
    readonly responses: Response[]
    readonly type: string

    constructor(value:{
        question: string,
        responses: Response[],
        type: string
    }){
        this.question = value.question
        this.responses = value.responses
        this.type = value.type
    }

    static fromJson ( value: {
        type: string,
        question: string,
        responses: { points: string; response: string; }[]
    }): Question {
        const jsonResponses: Response[] = value.responses.map( response => Response.fromJson({response: response.response, points: response.points}))
        return new Question({
            type: value.type,
            question: value.question,
            responses: jsonResponses
        })
    }
}