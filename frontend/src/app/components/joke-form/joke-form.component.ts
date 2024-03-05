import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './joke-form.component.html',
  styleUrl: './joke-form.component.css'
})
export class JokeFormComponent {

  hintsFormControl = new FormControl('', [Validators.maxLength(80)]);

  constructor(private jokeService: JokeService) {}

  handleButtonClick() {
    if (!this.hintsFormControl.valid) return;
    const hints = this.hintsFormControl.value || '';
    this.jokeService.setStateLoading();
    this.jokeService.updateJoke(hints);
  }
}
