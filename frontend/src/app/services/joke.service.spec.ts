import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  let service: JokeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(JokeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    const mockData = { type: 'user', content: 'the-joke' };

    service.joke.subscribe(data => {
      expect(data).toEqual(mockData.content);
    });

    service.updateJoke();

    const req = httpTestingController.expectOne('http://localhost:3000/');
    expect(req.request.method).toEqual('POST');
    req.flush(mockData);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
