import { TestBed } from '@angular/core/testing';

import { TeamStore } from './team-store';

describe('TeamStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamStoreService = TestBed.get(TeamStoreService);
    expect(service).toBeTruthy();
  });
});
