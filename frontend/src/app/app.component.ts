import { Component } from '@angular/core';
import { JokeComponent } from './components/joke/joke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
