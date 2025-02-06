import { test as baseTest } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager'; 

type UiFixtures = {
  pageManager: PageManager;
};

export const test = baseTest.extend<UiFixtures>({
  pageManager: async ({}, use) => {
    const pageManager = new PageManager();
    await use(pageManager); 
  },

});

export { expect } from '@playwright/test';


