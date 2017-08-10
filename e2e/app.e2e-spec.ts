import { AngularPHPPage } from './app.po';

describe('angular-php App', () => {
  let page: AngularPHPPage;

  beforeEach(() => {
    page = new AngularPHPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
