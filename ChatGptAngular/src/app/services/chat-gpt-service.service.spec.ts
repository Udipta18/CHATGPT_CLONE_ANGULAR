import { TestBed } from '@angular/core/testing';

import { ChatGptServiceService } from './chat-gpt-service.service';

describe('ChatGptServiceService', () => {
  let service: ChatGptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
