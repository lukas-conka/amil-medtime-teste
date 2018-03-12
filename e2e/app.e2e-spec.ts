import { AmilPage } from './app.po';

describe('amil App', () => {
  let page: AmilPage;

  beforeEach(() => {
    page = new AmilPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
