import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JokeOutputComponent } from '../joke-output/joke-output.component';
import { JokeFormComponent } from '../joke-form/joke-form.component';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    JokeFormComponent,
    JokeOutputComponent
  ],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
}
