import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private router: Router) { }

  goToSignal() {
    this.router.navigate(['/signal']);
  }

  goToAttribute() {
    this.router.navigate(['/attribute-directive']);
  }
}