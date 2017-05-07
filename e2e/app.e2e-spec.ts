import { FlashWordsPage } from './app.po';

describe('flash-words App', function() {
  let page: FlashWordsPage;

  beforeEach(() => {
    page = new FlashWordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
