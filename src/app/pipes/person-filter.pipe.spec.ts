import { PersonFilterPipe } from './person-filter.pipe';

describe('PersonFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
