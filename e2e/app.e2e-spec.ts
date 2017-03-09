import { SampleAngular2AppPage } from './app.po';

describe('sample-angular2-app App', () => {
  let page: SampleAngular2AppPage;

  beforeEach(() => {
    page = new SampleAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
