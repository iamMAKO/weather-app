import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pantheon';
}
