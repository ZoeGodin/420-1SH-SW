import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-regular-question',
  imports: [],
  templateUrl: './regular-question.component.html'
})
export class RegularQuestionComponent implements OnInit{

  router: Router = new Router

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
    })
  }

}
