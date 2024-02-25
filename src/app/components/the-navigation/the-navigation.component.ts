import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'the-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './the-navigation.component.html',
  styleUrl: './the-navigation.component.css'
})
export class TheNavigationComponent {

}
