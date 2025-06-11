import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component.component';
import confetti from 'canvas-confetti';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-win-screen',
  imports: [ButtonComponent],
  templateUrl: './win-screen.component.html',
  styleUrl: './win-screen.component.css'
})
export class WinScreenComponent {

  ngAfterViewInit(): void {
    this.launchConfetti();
    this.playPartyHorn();
    setTimeout(() => {
      this.yippeePlayAudio();
    }, 2000)
  }

  launchConfetti(): void {
    confetti({
      particleCount: 350,
      spread: 200,
      origin: { y: 0.5 }
    });
  }

  playPartyHorn(): void {
    let audio = new Audio;
    audio.src = "assets/horn.mp3";
    audio.load();
    audio.play();
  }

  yippeePlayAudio(){
    let audio = new Audio;
    audio.src = "assets/yippe.mp3";
    audio.load();
    audio.play();
  }
}
