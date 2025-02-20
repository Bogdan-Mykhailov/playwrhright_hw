import { expect, test } from "../config/FixtureConfig";
import { Policies, Region } from "../data/types";
import { credentials } from "../data/data";

test.describe("UI", { tag: "@ui" }, () => {
  test("[ @ui-1 ] Check the title is correct", async ({ page, epamPage }) => {
    await test.step("Open EPAM.com", async () => {
      await epamPage.open();
      await expect(page).toHaveURL(epamPage.getPageUrl());
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
});
