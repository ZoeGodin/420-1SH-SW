import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  //Placeholder names for teams
  team1Name = 'Élèves';
  team2Name = 'Profs';

  team1Points = 0;
  team2Points = 0;


  //Function that sets the name of the team we desire
  setTeamName(team: 'team1' | 'team2', name: string) {
    if (team === 'team1') this.team1Name = name;
    else this.team2Name = name;
  }

  //Function that adds thr given points to the given team's total points
  addPoints(team: 'team1' | 'team2', points: number) {
    if (team === 'team1'){
      this.team1Points += points;
    }
    else {
      this.team2Points += points;
    }
  }

  //Reset both team's points to initial
  resetPoints() {
    this.team1Points = 0;
    this.team2Points = 0;
  }
}
