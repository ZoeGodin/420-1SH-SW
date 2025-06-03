import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import { TeamService } from '../../services/team.service';
import { Question } from '../../models/question.model';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'home-page',
  imports: [ButtonComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  object: any;

  constructor(public teamService: TeamService) 
  {
    this.getData('demo')
  }


  async getData(filename: string){
    const object = await import(`../../../answers/${filename}.json`);
    console.log(object)
    console.log(object.default)
  }

  // ngOnInit(){
  //   data.map( test => {
  //       let obj = Question.fromJson(test)
  //       console.log('OBJECT', obj)
  //     }
  //   )
  // }

  changeTeamName(team: 'team1' | 'team2', event: any){
    this.teamService.setTeamName(team, event.target.value)
  }
}
