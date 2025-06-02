export class Response{
    readonly response: string
    readonly points: string
    
    constructor(value:{
        response: string,
        points: string,
    }){
        this.response = value.response
        this.points = value.points
    }
}