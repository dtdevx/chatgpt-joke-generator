import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeOutputComponent } from './joke-output.component';
import { JokeService } from '../../services/joke.service';
import { Subject } from 'rxjs';
import { State } from '../../enums/state.enum';

describe('JokeOutputComponent', () => {
  let component: JokeOutputComponent;
  let fixture: ComponentFixture<JokeOutputComponent>;
  let mockJokeService: any;

  beforeEach(async () => {
    mockJokeService = jasmine.createSpyObj('JokeService', ['updateJoke', 'getState']);
    mockJokeService.joke = new Subject<string>;

    await TestBed.configureTestingModule({
      imports: [JokeOutputComponent],
      providers: [
        { provide: JokeService, useValue: mockJokeService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the state from service', () => {
    const mockState = State.LOADING;
    mockJokeService.getState.and.returnValue(mockState);
    const result = component.getState();
    expect(result).toBe(mockState);
  });
});
