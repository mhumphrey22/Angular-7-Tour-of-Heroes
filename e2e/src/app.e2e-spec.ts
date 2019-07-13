import { AppPage } from './app.po';

//  Environment
import { environment } from '../../src/environments/environment';

describe('App.component.html', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display "Tour of Heroes - Environment Name"', () => {
    page.navigateTo();

    expect(page.getTitleText()).toEqual(`Tour of Heroes – ${ environment.name }`);
  });
});
