import { Ang2WeatherPage } from './app.po';

describe('ang2-weather App', () => {
  let page: Ang2WeatherPage;

  beforeEach(() => {
    page = new Ang2WeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
