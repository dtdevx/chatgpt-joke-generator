import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokeService } from '../../services/joke.service';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-joke-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-output.component.html',
  styleUrl: './joke-output.component.css'
})
export class JokeOutputComponent implements OnInit, OnDestroy {

  stateEnum = State;

  jokeSubscription?: Subscription;

  joke = '';

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.jokeSubscription = this.jokeService.joke.subscribe(joke => {
      this.joke = joke;
      this.jokeService.setStateDone();
    });
  }

  getState() {
    return this.jokeService.getState();
  }

  ngOnDestroy(): void {
    this.jokeSubscription?.unsubscribe();
  }
}
