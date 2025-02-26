import { expect, test } from "../config/FixtureConfig";
import { Policies, Region } from "../data/types";
import { credentials } from "../data/data";

test.describe("UI", { tag: "@ui" }, () => {
  test("[ @ui-1 ] Check the title is correct", async ({ page, epamPage }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
      await epamPage.pressAcceptAllCookiesButton();
    });

    await test.step("Compare the title", async () => {
      expect(await epamPage.getTitle()).toBe(credentials.pageTitle);
    });
  });

  test("[ @ui-2 ] Check the ability to switch Light / Dark mode", async ({
    page,
    epamPage,
  }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
      await epamPage.pressAcceptAllCookiesButton();
    });

    await test.step("Switch the toggle for theme to opposite state", async () => {
      const initTheme = await epamPage.header.getCurrentTheme();

      await epamPage.header.clickOnThemeSwitcher();
      const newTheme = await epamPage.header.getCurrentTheme();

      expect(initTheme).not.toBe(newTheme);
    });
  });

  test("[ @ui-3 ] Check that allow to change language to UA", async ({
    page,
    epamPage,
  }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
      await epamPage.pressAcceptAllCookiesButton();
    });

    await test.step("Switch the site's language to Ukraine", async () => {
      await epamPage.header.setLanguageTo(credentials.ukraine);
      const lang = await epamPage.header.getCurrentLanguage();
      expect(lang).toBe(credentials.lang);

      const updatedText =
        await epamPage.header.getUpdatedLocationSelectorName();
      expect(updatedText).toBe("Україна (UA)");
    });
  });

  test("[ @ui-4 ] Check the policies list", async ({ page, epamPage }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
      await epamPage.pressAcceptAllCookiesButton();
    });

    await test.step("Go to the bottom of the page", async () => {
      await epamPage.footer.scrollToBottom();
    });

    await test.step("Check the policies list", async () => {
      await Promise.all(
        Object.values(Policies).map(async (policy: Policies) => {
          const policyLocator = await epamPage.footer.checkPolicy(policy);
          await expect(policyLocator).toBeVisible();
        }),
      );
    });
  });

  test("[ @ui-5 ] Check that allow to switch location list by region", async ({
    page,
    epamPage,
  }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
      await epamPage.pressAcceptAllCookiesButton();
    });

    await test.step("Go to Our Locations part", async () => {
      await expect(epamPage.locations.locationSection).toBeVisible();
    });

    await test.step("Check that 3 regions are presented and allows to switch the region's locations list", async () => {
      const regions = Object.values(Region);

      for (const region of regions) {
        const regionLink = await epamPage.locations.getRegionLink(region);
        await expect(regionLink).toBeVisible();
        await regionLink.click();
        await expect(regionLink).toHaveClass(/active/);
      }
    });
  });

  test("[ @ui-6 ] Check the search function", async ({ page, epamPage }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
      await epamPage.pressAcceptAllCookiesButton();
    });

    await test.step('Open search field and submit request "AI"', async () => {
      await epamPage.header.clickOnSearchIcon();
      await expect(epamPage.header.searchPanel).toBeVisible();
      await epamPage.header.pasteDataAndPressSearchButton(
        credentials.searchText,
      );
    });

    await test.step("Check that site should show the search results", async () => {
      const elements = await epamPage.header.searchResult.all();

      for (const element of elements) {
        await expect(element).toContainText(credentials.searchText);
      }
    });
  });

  test("[ @ui-7 ] Check form's fields validation", async ({
    page,
    contactPage,
  }) => {
    await test.step("Open https://www.epam.com/about/who-we-are/contact", async () => {
      await contactPage.open();
      await expect(page).toHaveURL(contactPage.getPageUrl());
      await contactPage.pressAcceptAllCookiesButton();
    });

    await test.step("Check validation for required fields", async () => {
      await contactPage.clickSubmitButton();
      await contactPage.checkValidationErrors();
    });
  });

  test("[ @ui-8 ] Check that the Company logo on the header leads to the main page", async ({
    page,
    aboutPage,
  }) => {
    await test.step("Open https://www.epam.com/about", async () => {
      await aboutPage.open();
      await expect(page).toHaveURL(aboutPage.getPageUrl());
      await aboutPage.pressAcceptAllCookiesButton();
    });

    await test.step("Click on the company logo in the header", async () => {
      await aboutPage.header.clickLogo();
    });

    await test.step("Verify redirection to the main page", async () => {
      await expect(page).toHaveURL("https://www.epam.com/");
    });
  });

  test("[ @ui-9 ] Check that allows to download report", async ({
    page,
    aboutPage,
  }) => {
    await test.step("Open https://www.epam.com/about", async () => {
      await aboutPage.open();
      await expect(page).toHaveURL(aboutPage.getPageUrl());
      await aboutPage.pressAcceptAllCookiesButton();
    });

    await test.step(
      'Download EPAM Corporate Overview 2024 report on "EPAM at\n' +
        'a Glance" block',
      async () => {
        const download = await aboutPage.downloadReport();
        expect(await download.path()).toBeTruthy();

        const actualFileName = download.suggestedFilename();
        expect(actualFileName).toBe(credentials.downloadedFilename);
        expect(actualFileName.endsWith(".pdf")).toBe(true);
      },
    );
  });
});
