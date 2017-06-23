import { Orb17Page } from './app.po';

describe('orb17 App', () => {
  let page: Orb17Page;

  beforeEach(() => {
    page = new Orb17Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
