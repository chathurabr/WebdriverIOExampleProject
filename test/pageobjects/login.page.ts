import Page from './page';
import DashboardPage from './dashboard.page';

export default class LoginPage extends Page {
    get inputUsername () { return $(`//input[@name='email']`) }
    get inputPassword () { return $(`//input[@name='password']`) }
    get btnSubmit () { return $(`//button[@type='submit']`) }

    login (username: string, password: string): DashboardPage {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();

        return new DashboardPage();
    }

    open () {
        return super.open('login');
    }
}

