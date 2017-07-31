import { DilectusPage } from './app.po';

describe('dilectus App', () => {
  let page: DilectusPage;

  beforeEach(() => {
    page = new DilectusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
