import { test as base } from "@playwright/test";
import EpamPage from "../po/pages/EpamPage";
import ContactPage from "../po/pages/ContactPage";
import AboutPage from "../po/pages/AboutPage";

type MyFixtures = {
  epamPage: EpamPage;
  contactPage: ContactPage;
  aboutPage: AboutPage;
};

export const test = base.extend<MyFixtures>({
  epamPage: async ({ page }, use) => {
    const epamPage = new EpamPage(page);
    await use(epamPage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  aboutPage: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await use(aboutPage);
  },
});

export { expect } from "@playwright/test";
