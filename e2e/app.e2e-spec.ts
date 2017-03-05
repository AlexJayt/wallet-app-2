import { WalletAppPage } from './app.po';

describe('wallet-app App', () => {
  let page: WalletAppPage;

  beforeEach(() => {
    page = new WalletAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
