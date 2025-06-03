import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import { TeamService } from '../../services/team.service';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'home-page',
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  object: any;

  constructor(public teamService: TeamService, public questionService: QuestionsService){}

  changeTeamName(team: 'team1' | 'team2', event: any){
    this.teamService.setTeamName(team, event.target.value)
  }
}
