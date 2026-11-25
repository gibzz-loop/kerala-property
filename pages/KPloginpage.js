

 export class KPLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("#ulogin");
    this.passwordField = page.locator("#upass");
    this.loginButton = page.locator("#sub_logbtn");
    this.logo = page.getByRole("img", { name: "Kerala Property" });
  }

  async goto() {
    await this.page.goto("https://keralaproperty.in/member/login/");
  }

  async setValues(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
  }

  async loginClick() {
    await this.loginButton.click();
  }

  async logoClick() {
    await this.logo.click();
  }
}