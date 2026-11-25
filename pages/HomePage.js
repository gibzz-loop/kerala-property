import { expect } from '@playwright/test';

export class Homepage {
  constructor(page) {
    this.page = page;
    this.logo = page.getByRole('img', { name: 'Kerala Property' });
    this.headingfield = page.getByRole('heading', { name: 'My Properties' });
    this.namefield = page.getByRole('heading', { name: 'Gibina Biju' });
    this.accountfield = page.getByRole('link', { name: 'My Account' });
  }

  async goto() {
    await this.page.goto('https://keralaproperty.in/member/myhome/');
  }

  async logoClick() {
    await this.logo.click();
  }

  async expectHeadingVisible() {
    await expect(this.headingfield).toBeVisible();
  }

  async expectNameVisible() {
    await expect(this.namefield).toBeVisible();
  }

  async clickMyAccount() {
    await this.accountfield.click();
  }
}