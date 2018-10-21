import { TestBed, inject } from '@angular/core/testing';

import { DragService } from './drag.service';
import { setupTestBed } from '../helpers/setup-test-bed.spec';

describe('DragService', () => {
  setupTestBed({
    providers: [DragService]
  });

  it('should be created', inject([DragService], (service: DragService) => {
    expect(service).toBeTruthy();
  }));
});
