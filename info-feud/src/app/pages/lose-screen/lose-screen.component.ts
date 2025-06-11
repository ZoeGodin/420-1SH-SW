import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component.component';

@Component({
  selector: 'app-lose-screen',
  imports: [ButtonComponent],
  templateUrl: './lose-screen.component.html',
  styleUrl: './lose-screen.component.css'
})
export class LoseScreenComponent {

  ngAfterViewInit(): void {
    this.playSadNoise();
  }

  playSadNoise(): void {
    let audio = new Audio;
    audio.src = "assets/wah-wah.mp3";
    audio.load();
    audio.play();
  }
}
