import { GestionClient } from './gestion-client';

describe('GestionClient', () => {
  it('should create an instance', () => {
    expect(new GestionClient('', '', '', '', '', null, null, '', '', '', '', null, '')).toBeTruthy();
  });
});
