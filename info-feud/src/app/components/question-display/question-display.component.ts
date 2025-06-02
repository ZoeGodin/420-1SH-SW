import { Component, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotionBoxComponent } from '../motion-box/motion-box.component';
import { ButtonComponent } from '../button-component/button-component.component';
import { CounterComponent } from '../counter/counter.component';
import { Response } from '../../models/response.model';
import { Question } from '../../models/question.model';
import { TeamService } from '../../services/team.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question-display',
  standalone: true,
  imports: [CommonModule, MotionBoxComponent, ButtonComponent, CounterComponent, MatButtonModule],
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css'],
})
export class QuestionDisplayComponent {
  //Recieve the question specifications
  @Input() questionNumber = 1;
  @Input() question!: Question;
  @Input() specialResponse!: Response;
  @Input() maximumPoints = 0;
  @Input() nextButtonRoute: string = '/';

  //Get all the motion boxes components
  @ViewChildren(MotionBoxComponent) boxes!: QueryList<MotionBoxComponent>;

  readyToRevealDisabled = true;
  revealedCount = 0;
  totalAnswers = 0;
  pointsToAdd = 0;
  team1Strikes = [false, false, false];
  team2Strikes = [false, false, false];

  constructor(public teamService: TeamService) {}

  //When initializing, we timeout the reveal button since the boxes are not yet all initialized.
  ngOnInit() {
    this.totalAnswers = this.question.responses.length + 1;

    setTimeout(() => {
        this.readyToRevealDisabled = false;
      }, 5000
    );
  }

  //When a box is revealed, we add the points to the total that will be given to the winning team
  onBoxRevealed(points: number) {
    this.revealedCount++;
    this.pointsToAdd += points;
  }

  //Toggle a strike box 
  toggleStrike(team: 'team1' | 'team2', index: number) {
    const arr = team === 'team1' ? this.team1Strikes : this.team2Strikes;
    arr[index] = !arr[index];
  }

  //Add points to a team after all answers (wether forced or not) are revealed
  // TODO? (NTH) -> Block buttons to add once we have already added (boolean)
  addToTeam(team: 'team1' | 'team2') {
    const points = Math.min(this.pointsToAdd, this.maximumPoints);
    this.teamService.addPoints(team, points);
  }

  //Forces the answers to reveal themselves- used when the teams have not found all answers and to trigger the rest of the game.
  forceRevealAll() {
    this.boxes.forEach(box => box.forceRevealWithoutEmit());
    this.revealedCount = this.totalAnswers;
  }
}
