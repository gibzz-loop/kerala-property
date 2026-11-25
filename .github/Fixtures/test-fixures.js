import { test as base, expect } from '@playwright/test';
import { KPLoginPage } from '../pages/KPLoginPage';
import { KPHomepage } from '../pages/KPHomepage';


export const test = base.extend({

  login: async ({ page }, use) => {
    await use(new KPLoginPage(page));
  },

  homePage: async ({ page }, use) => {
    const home = new KPHomepage(page);
    await use(home);
  },

});

export { expect };