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
    this.sadNoiseAudioPlay();
    setTimeout(() => {
      this.whoompAudioPlay();
    }, 6000)
  }

  sadNoiseAudioPlay(): void {
    let audio = new Audio;
    audio.src = "assets/wah-wah.mp3";
    audio.load();
    audio.play();
  }

  whoompAudioPlay(){
    let audio = new Audio;
    audio.src = "assets/whomp.mp3";
    audio.load();
    audio.play();
  }
}
