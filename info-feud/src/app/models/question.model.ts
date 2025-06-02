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
}