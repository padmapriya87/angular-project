import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [        
        HttpClientTestingModule 
      ],
      declarations: [        
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(ApiService).toBeTruthy();
  });
});
