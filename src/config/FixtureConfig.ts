import { test as base } from "@playwright/test";
import EpamPage from "../po/pages/EpamPage";

type MyFixtures = {
  epamPage: EpamPage;
};

export const test = base.extend<MyFixtures>({
  epamPage: async ({ page }, use) => {
    const epamPage = new EpamPage(page);
    await use(epamPage);
  },
});

export { expect } from "@playwright/test";
