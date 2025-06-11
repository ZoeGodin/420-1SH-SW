import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-wavy-text',
  imports: [NgFor],
  templateUrl: './wavy-text.component.html',
  styleUrl: './wavy-text.component.css'
})
export class WavyTextComponent {
  @Input() text: string = '';
}
