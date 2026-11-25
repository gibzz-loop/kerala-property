import { test, expect } from '@playwright/test';
import { KPloginpage } from '../pages/KPloginpage';

/** @type {KPloginpage} */
let login;

test.beforeEach(async ({ page }) => {
  login = new KPloginpage(page);
  await login.goto();
});

test('valid login', async ({ page }) => {
  await login.setValues(process.env.KP_USER, process.env.KP_PASS);
  await login.loginClick();
  await expect(page).not.toHaveURL(/login/);
});

test('logo is visible', async () => {
  await expect(login.logo).toBeVisible();
});

test('logo click goes to home', async ({ page }) => {
  await login.logoClick();
  await expect(page).toHaveURL('https://keralaproperty.in/');
});