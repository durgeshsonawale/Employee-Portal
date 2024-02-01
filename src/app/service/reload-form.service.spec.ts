import { TestBed } from '@angular/core/testing';

import { ReloadFormService } from './reload-form.service';

describe('ReloadFormService', () => {
  let service: ReloadFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
