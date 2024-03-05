import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, throwError } from 'rxjs';
import { State } from '../enums/state.enum';

interface JokeResponse {
  type: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {

  stateEnum = State;
  private _state: State = State.INITIAL;

  private backend = 'http://localhost:3000/';

  joke: Subject<string> = new Subject<string>;

  constructor(private http: HttpClient) { }

  updateJoke(hints = '') {
    const requestBody = { content: hints };
    this.http.post<JokeResponse>(this.backend, requestBody).pipe(catchError(this.handleError)).subscribe((joke: JokeResponse) => {
      this.joke.next(joke.content);
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  setStateLoading() {
    this._state = State.LOADING;
  }

  setStateDone() {
    this._state = State.DONE;
  }

  getState() {
    return this._state;
  }
}
