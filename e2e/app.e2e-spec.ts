import { Magnificentfuture.ComPage } from './app.po';

describe('magnificentfuture.com App', () => {
  let page: Magnificentfuture.ComPage;

  beforeEach(() => {
    page = new Magnificentfuture.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
