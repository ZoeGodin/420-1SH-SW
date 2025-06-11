import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import { TeamService } from '../../services/team.service';
import { QuestionsService } from '../../services/questions.service';
import { Router } from '@angular/router';
import { WavyTextComponent } from '../../components/wavy-text/wavy-text.component';

@Component({
  selector: 'home-page',
  imports: [ButtonComponent, WavyTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: Router = new Router
  object: any;

  constructor(public teamService: TeamService, public questionService: QuestionsService){}

  changeTeamName(team: 'team1' | 'team2', event: any){
    this.teamService.setTeamName(team, event.target.value)
  }

  startGame(game: string){
    if(game === 'migame'){
      this.router.navigate(['/migame', game, 1])
    }else{
      this.router.navigate(['/question', game, 1])
    }
  }
}
