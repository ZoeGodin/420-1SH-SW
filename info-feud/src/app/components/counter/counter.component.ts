import { Component, Input } from '@angular/core';
import { animate, easeInOut } from 'motion';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  //Receive the number of points for the question
  @Input() points: number = 0

  //After the view is initialized, 
  async ngAfterViewInit() {
    //Get the counter element from the DOM
    const countEl = document.getElementById('count');
    if (!countEl) return;

    // Initialize the counter to 0
    const counter = { value: 0 };

    //Animate the counter
    //  We assign the counter to the points we have and for the wanted duration we increse the counter.
    animate(
      counter,
      { value: this.points },
      {
        duration: 2,
        ease: easeInOut,
        onUpdate: () => {
          countEl.textContent = Math.round(counter.value).toString();
        },
      }
    );
  }
}
