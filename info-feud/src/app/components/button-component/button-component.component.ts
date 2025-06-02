import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'button-component',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: `./button-component.component.html`,
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponent {
  @Input('button-text') buttonText?: string;
  @Input() navigateTo?: string; // <--- Add this
  @Output() buttonClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  handleClick() {
    this.buttonClick.emit();

    if (this.navigateTo) {
      this.router.navigate([this.navigateTo]);
    }
  }
}
