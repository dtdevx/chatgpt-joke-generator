import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import { StubJokeFormComponent } from '../../stubs/joke-form.component.stub';
import { StubJokeOutputComponent } from '../../stubs/joke-output.component.stub';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JokeComponent,
        StubJokeFormComponent,
        StubJokeOutputComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
