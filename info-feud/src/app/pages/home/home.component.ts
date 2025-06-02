import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component.component';

@Component({
  selector: 'home-page',
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
