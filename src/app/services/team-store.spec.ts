import { TestBed } from '@angular/core/testing';

import { TeamStore } from './team-store';

describe('TeamStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamStore = TestBed.get(TeamStore);
    expect(service).toBeTruthy();
  });
});
