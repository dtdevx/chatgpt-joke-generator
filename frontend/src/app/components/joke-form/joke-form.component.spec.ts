import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormComponent } from './joke-form.component';
import { JokeService } from '../../services/joke.service';

describe('JokeFormComponent', () => {
  let component: JokeFormComponent;
  let fixture: ComponentFixture<JokeFormComponent>;
  let mockJokeService: any;

  beforeEach(async () => {
    mockJokeService = jasmine.createSpyObj('JokeService', ['updateJoke', 'setStateLoading']);

    await TestBed.configureTestingModule({
      imports: [JokeFormComponent],
      providers: [
        { provide: JokeService, useValue: mockJokeService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do nothing if the form is invalid', () => {
    const mockedHints = 'abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghi';
    component.hintsFormControl.setValue(mockedHints);
    component.handleButtonClick();
    expect(mockJokeService.setStateLoading).not.toHaveBeenCalled();
    expect(mockJokeService.updateJoke).not.toHaveBeenCalledWith(mockedHints);
  });

  it('should request a new joke', () => {
    const mockedHints = 'test-hints';
    component.hintsFormControl.setValue(mockedHints);
    component.handleButtonClick();
    expect(mockJokeService.setStateLoading).toHaveBeenCalled();
    expect(mockJokeService.updateJoke).toHaveBeenCalledWith(mockedHints);
  });

});
