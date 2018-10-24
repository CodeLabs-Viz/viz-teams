import { TestBed } from '@angular/core/testing';

import { TeamStoreService } from './team-store.service';

describe('TeamStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamStoreService = TestBed.get(TeamStoreService);
    expect(service).toBeTruthy();
  });
});
