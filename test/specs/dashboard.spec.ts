import LoginPage from  '../pageobjects/login.page';
import DashboardPage from '../pageobjects/dashboard.page';


describe('Verify Dashboard', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    

    beforeAll(() => {
        loginPage = new LoginPage();
    });

    it('should login with valid credentials', () => {
        loginPage.open();

        dashboardPage = loginPage.login('chathurar@calcey.com', 'User@123');
        dashboardPage.getBookSpaceLabel();
    });

});


