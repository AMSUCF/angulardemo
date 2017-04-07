import { AngdemoPage } from './app.po';

describe('angdemo App', () => {
  let page: AngdemoPage;

  beforeEach(() => {
    page = new AngdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
