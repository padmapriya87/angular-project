import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherapiService } from './weatherapi.service';

describe('WeatherapiService', () => {
  let service: WeatherapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [        
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(WeatherapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
