import Page from './page';

const SELECTORS = {
 
  BookSpaceElement: "//h2[contains(text(),'Book spaces anywhere you go')]",
  
};

export default class DashboardPage extends Page {
  constructor() {
    super();
  }



  getBookSpaceLabel(): void {
    $(SELECTORS.BookSpaceElement).waitForDisplayed();
  }

}
