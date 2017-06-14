import { RecipeAppPage } from './app.po';

describe('recipe-app App', () => {
  let page: RecipeAppPage;

  beforeEach(() => {
    page = new RecipeAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
